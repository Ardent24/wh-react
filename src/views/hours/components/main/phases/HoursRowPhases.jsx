import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { statePhases } from "../../../../../store/reducers/tasksReducer";
import {
  responsePhaseFilteredTasks,
} from "../../../../../store/reducers/hourReducer";

const HoursRowPhases = ({ id }) => {
  const phases = useSelector(statePhases);
  const dispatch = useDispatch();

  const handlerTasks = (ev) => {
    const val = ev.target.value;

    dispatch(responsePhaseFilteredTasks({val, id}));
  };

  return (
    <Form.Control as="select" onChange={handlerTasks}>
      <option value="phases">Phases</option>
      {phases.map((elem) => (
        <option value={elem.id} key={`key-${elem.name}`}>
          {elem.name}
        </option>
      ))}
    </Form.Control>
  );
};

export default HoursRowPhases;
