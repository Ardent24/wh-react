import React from "react";
import { Col, Form } from "react-bootstrap";
import styled from "styled-components";
import cx from "classnames";

const Required = styled.span`
  color: #ee4586;
`;

const EstimationCreateTask = ({ register, errors }) => {
  const dangerShowText = cx("text-danger fade", {
    show: errors.estimationTime,
  });

  return (
    <Form.Group as={Col}>
      <Form.Label>
        Estimation time <Required>*</Required>
      </Form.Label>
      <Form.Control
        type="text"
        {...register("estimationTime", {
          required: true,
          pattern: { value: /^\d+$/ },
        })}
      />
      <Form.Text className={`${dangerShowText} text-error`}>
        Entered value time
      </Form.Text>
    </Form.Group>
  );
};

export default EstimationCreateTask;
