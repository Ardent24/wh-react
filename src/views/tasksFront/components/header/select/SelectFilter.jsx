import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  responsePhases,
  setFilterSelect,
  stateFilterSelect,
  statePhases,
} from "../../../../../store/reducers/tasksReducer";
import "./SelectFilter.scss";
import { store } from "../../../../../store/store";

const SelectFilter = () => {
  React.useEffect(() => {
    store.dispatch(responsePhases());
  }, []);

  const value = useSelector(stateFilterSelect);
  const phases = useSelector(statePhases);
  const dispatch = useDispatch();

  const handlerTasks = (ev) => {
    const val = ev.target.value;

    dispatch(setFilterSelect(val));
  };

  return (
    <Form.Control
      as="select"
      className={"select-tasks"}
      onChange={handlerTasks}
      value={value.toLowerCase()}
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
