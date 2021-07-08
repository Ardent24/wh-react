import React from "react";
import { Col, Form } from "react-bootstrap";
import { findIndexArray } from "../../../../../../modules/filtres";

const CreateRowTasks = ({ dataRow, setDataRow }) => {
  const row = dataRow;
  const idTasks = row.task.id;
  const rowTasks = row.tasks;

  const handlerValue = (ev) => {
    const id = Number(ev.target.value);
    const findIndex = findIndexArray(rowTasks, id);
    const task = rowTasks[findIndex];

    setDataRow((prev) => ({
      ...prev,
      task,
    }));
  };

  return (
    <Form.Group as={Col}>
      <Form.Label>Tasks</Form.Label>
      <Form.Control as="select" value={idTasks} onChange={handlerValue}>
        {rowTasks &&
          rowTasks.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
      </Form.Control>
    </Form.Group>
  );
};

export default CreateRowTasks;
