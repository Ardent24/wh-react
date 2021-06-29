import React from "react";
import { Form } from "react-bootstrap";

const height = "calc(1.5em + .75rem + 2px)";

const HoursRowDescription = ({ register }) => {
  return (
    <Form.Control
      as="textarea"
      style={{ height: height }}
      {...register("description")}
    />
  );
};

export default HoursRowDescription;
