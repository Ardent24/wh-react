import React from "react";
import { Col, Form } from "react-bootstrap";

const CreateRowStatus = () => {
  return (
    <Form.Group as={Col}>
      <Form.Label>Current status</Form.Label>
      <Form.Control as="select">
        <option value="IN_PROGRESS">In progress</option>
        <option value="DONE">Done</option>
        <option value="NEED_FEEDBACK">Need feedback</option>
        <option value="REJECTED">Rejected</option>
      </Form.Control>
    </Form.Group>
  );
};

export default CreateRowStatus;
