import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editRowHours } from "../../../../../store/reducers/hourReducer";

const HoursRowHours = ({ register, errors, amount, index }) => {
  // const dispatch = useDispatch();
  // const value = listRow[indexRow].hours;
  //
  // const handlerHours = (ev) => {
  //   let value = +ev.target.value;
  //   if (!value) value = 0;
  //
  //   dispatch(editRowHours({ value, indexRow }));
  // };

  return (
    // <Form.Control
    //   as="input"
    //   value={value}
    //   isInvalid={errors.hours}
    //   onChange={handlerHours}
    // />
    <Form.Control
      as="input"
      {...register(`items[${index}].amount`)}
      //isInvalid={errors.hours}
      defaultValue={amount}
      value={amount}
    />
  );
};

export default HoursRowHours;
