import React from "react";
import { Form } from "react-bootstrap";

const HoursRowStatus = ({ register, index, status }) => {
  return (
    <Form.Control
      as="select"
      {...register(`items[${index}].status`)}
      defaultValue={status}
    >
      <option value="IN_PROGRESS">In progress</option>
      <option value="DONE">Done</option>
      <option value="NEED_FEEDBACK">Need feedback</option>
      <option value="REJECTED">Rejected</option>
    </Form.Control>
  );
};

export default HoursRowStatus;
