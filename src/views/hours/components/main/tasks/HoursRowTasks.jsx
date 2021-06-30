import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { stateTasks } from "../../../../../store/reducers/hourReducer";

const HoursRowTasks = ({ register, task, index }) => {
  const state = useSelector(stateTasks);
  const tasks = state[index] ? state[index] : [];

  return (
    <Form.Control
      as="select"
      {...register(`items[${index}].task`, {
        required: true,
      })}
      defaultValue={task?.name}
    >
      {<option value={task}>{task?.name}</option>}
      {tasks.map(
        (item) =>
          item.name !== task.name && (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          )
      )}
    </Form.Control>
  );
};

export default HoursRowTasks;
