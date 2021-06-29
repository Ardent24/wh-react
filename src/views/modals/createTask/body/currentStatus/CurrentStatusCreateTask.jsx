import React from "react";
import { Form } from "react-bootstrap";

const CurrentStatusCreateTask = ({ register }) => {
  return (
    <Form.Group>
      <Form.Label>Current status</Form.Label>
      <Form.Control as="select" {...register("currentStatus")}>
        <option value="IN_PROGRESS">In progress</option>
        <option value="DONE">Done</option>
        <option value="NEED_FEEDBACK">Need feedback</option>
        <option value="REJECTED">Rejected</option>
      </Form.Control>
    </Form.Group>
  );
};

export default CurrentStatusCreateTask;
