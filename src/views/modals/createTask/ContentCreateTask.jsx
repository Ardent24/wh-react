import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { postTasksApi } from "../../../api/API";
import { editDate } from "../../../modules/date";
import {handleModal, resetContentModal} from "../../../store/reducers/modalReducer";
import { addNewTask } from "../../../store/reducers/tasksReducer";
import { stateIdUsers } from "../../../store/reducers/authReducer";
import CreateTaskFooter from "./footer/CreateTaskFooter";
import CreateTaskHeader from "./header/CreateTaskHeader";
import CreateTaskBody from "./body/CreateTaskBody";
import uuid from "react-uuid";

const ContentCreateTask = () => {
  const dispatch = useDispatch();
  const isIdUser = useSelector(stateIdUsers);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
  } = useForm({ mode: "onChange" });

  const disabledBtn = !isDirty || !isValid;

  const onSubmit = (data) => {
    const { startDate, endDate } = data.date;

    delete data.date;

    const newData = {
      task: {
        ...data,
        user: String(isIdUser),
        estimationTime: +data.estimationTime,
        startDate: editDate(startDate),
        endDate: editDate(endDate),
      },
    };

    postTasksApi(newData);
    newData.task.id = uuid();

    dispatch(addNewTask(newData.task));
    dispatch(handleModal(false));
    dispatch(resetContentModal());

    // dispatch(responseTasks(0));
    // // this test all tasks
    // dispatch(responseAllTasks(0));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CreateTaskHeader />
      <CreateTaskBody register={register} errors={errors} control={control} />
      <CreateTaskFooter disabled={disabledBtn} />
    </Form>
  );
};

export default ContentCreateTask;
