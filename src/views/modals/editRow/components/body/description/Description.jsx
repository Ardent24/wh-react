import React from 'react';
import {Form} from "react-bootstrap";

const Description = () => {
  return (
    <Form.Group>
      <Form.Label>Comment</Form.Label>
      <Form.Control as="textarea" />
    </Form.Group>
  );
};

export default Description;
