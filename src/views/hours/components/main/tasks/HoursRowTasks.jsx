import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editRowCurrentTask } from "../../../../../store/reducers/hourReducer";

const HoursRowTasks = ({ register, indexRow, listRow }) => {
  const dispatch = useDispatch();

  const tasks = listRow[indexRow].tasks;
  const value = listRow[indexRow].currentTask;

  const changeTasks = (ev) => {
    const value = ev.target.value.toLowerCase();
    dispatch(editRowCurrentTask({ value, indexRow }));
  };

  return (
    <Form.Control
      as="select"
      {...register("task", {
        required: true,
        validate: (value) => value == "tasks",
      })}
      value={value.toLowerCase()}
      onChange={changeTasks}
    >
      <option value="tasks">tasks</option>
      {tasks.map((elem) => (
        <option value={elem.name.toLowerCase()} key={`key-${elem.id}`}>
          {elem.name}
        </option>
      ))}
    </Form.Control>
  );
};

export default HoursRowTasks;
