import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterSelect,
  stateFilterSelect,
  statePhases,
} from "../../../../../store/reducers/tasksReducer";
import "./SelectFilter.scss";

const SelectFilter = () => {
  const value = useSelector(stateFilterSelect);
  const phases = useSelector(statePhases);
  const dispatch = useDispatch();

  const handlerTasks = (ev) => {
    const val = ev.target.value.toLowerCase();
    dispatch(setFilterSelect(val));
  };

  return (
    <Form.Control
      as="select"
      className={"select-tasks"}
      onChange={handlerTasks}
      value={value}
    >
      <option value="all">All</option>
      {phases.map((elem) => (
        <option value={elem.name.toLowerCase()} key={`key-${elem.name}`}>
          {elem.name}
        </option>
      ))}
    </Form.Control>
  );
};

export default SelectFilter;
