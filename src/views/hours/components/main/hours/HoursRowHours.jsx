import React from "react";
import { Form } from "react-bootstrap";

const HoursRowHours = ({ register, errors, amount, index }) => {
  return (
    <Form.Control
      as="input"
      {...register(`items[${index}].amount`, {
        required: true,
        pattern: { value: /^\d+$/ },
      })}
      isInvalid={errors[`items[${index}].amount`]}
      defaultValue={amount}
    />
  );
};

export default HoursRowHours;
