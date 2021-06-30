import React from "react";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterValue,
  stateFilterValue,
} from "../../../../../store/reducers/tasksReducer";

const SearchFilter = () => {
  const value = useSelector(stateFilterValue);
  const dispatch = useDispatch();

  const handlerTasks = (ev) => {
    const val = ev.target.value.toLowerCase();

    dispatch(setFilterValue(val));
  };

  return (
    <FormControl placeholder="Search" onChange={handlerTasks} value={value} />
  );
};

export default SearchFilter;
