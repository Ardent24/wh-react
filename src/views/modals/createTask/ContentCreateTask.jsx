import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { postTasksApi } from "../../../api/API";
import { editDate } from "../../../modules/date";
import { handleModal } from "../../../store/reducers/modalReducer";
import {
  responseAllTasks,
  responseTasks,
} from "../../../store/reducers/tasksReducer";
import { stateIdUsers } from "../../../store/reducers/authReducer";
import CreateTaskFooter from "./footer/CreateTaskFooter";
import CreateTaskHeader from "./header/CreateTaskHeader";
import CreateTaskBody from "./body/CreateTaskBody";

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

    const newData = { task: { ...data } };

    newData.task.user = String(isIdUser);
    newData.task.estimationTime = +newData.task.estimationTime;
    newData.task.startDate = editDate(startDate);
    newData.task.endDate = editDate(endDate);

    postTasksApi(newData);
    dispatch(handleModal(false));
    dispatch(responseTasks(0));
    // this test all tasks
    dispatch(responseAllTasks(0));
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
