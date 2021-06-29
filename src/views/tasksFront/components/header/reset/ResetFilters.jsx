import React from "react";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { isResetedFilters } from "../../../../../store/reducers/tasksReducer";

const ResetFilters = () => {
  const dispatch = useDispatch();

  const handlerFilters = () => {
    dispatch(isResetedFilters());
  };

  return (
    <InputGroup.Append>
      <Button
        variant="secondary"
        className="btn-radius"
        onClick={handlerFilters}
      >
        Reset Filter
      </Button>
    </InputGroup.Append>
  );
};

export default ResetFilters;
