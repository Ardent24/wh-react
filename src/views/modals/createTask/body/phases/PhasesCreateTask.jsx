import React from "react";
import { useSelector } from "react-redux";
import {
  responsePhases,
  statePhases,
} from "../../../../../store/reducers/tasksReducer";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { store } from "../../../../../store/store";

const Required = styled.span`
  color: #ee4586;
`;

const PhasesCreateTask = ({ register }) => {
  React.useEffect(() => {
    store.dispatch(responsePhases());
  }, []);

  const phases = useSelector(statePhases);

  return (
    <Form.Group>
      <Form.Label>
        Phase <Required>*</Required>
      </Form.Label>
      <Form.Control
        as="select"
        {...register("phase", {
          required: true,
          validate: (value) => value !== "Phases",
        })}
      >
        <option>Phases</option>
        {phases.map((item) => (
          <option key={`id-${item.id}`} value={item.id}>
            {item.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default PhasesCreateTask;
