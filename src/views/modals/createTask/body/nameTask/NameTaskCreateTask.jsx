import React from "react";
import { Col, Form } from "react-bootstrap";
import styled from "styled-components";
import cx from "classnames";

const Required = styled.span`
  color: #ee4586;
`;

const NameTaskCreateTask = ({ register, errors }) => {
  const dangerShowText = cx("text-danger fade", { show: errors.name });

  return (
    <Form.Group as={Col}>
      <Form.Label>
        Name <Required>*</Required>
      </Form.Label>
      <Form.Control
        type="text"
        {...register("name", {
          required: true,
          pattern: { value: /[A-Za-zÄÖÜäöüß -]{2,}/ },
        })}
      />
      <Form.Text className={`${dangerShowText} text-error`}>
        Entered value name task
      </Form.Text>
    </Form.Group>
  );
};

export default NameTaskCreateTask;
