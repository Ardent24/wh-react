import React, { useState } from "react";
import { DatePicker } from "react-nice-dates";
import { enGB } from "date-fns/locale";
import { Col, Form, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFlagResetFilters,
  setFilterEndDate,
  setFilterStartDate,
  stateResetFilters,
} from "../../../../../store/reducers/tasksReducer";

import "react-nice-dates/build/style.css";
import { editDate } from "../../../../../modules/date";

const DateFilters = () => {
  const resetDate = useSelector(stateResetFilters);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  React.useEffect(() => {
    setStartDate(null);
    setEndDate(null);
    dispatch(changeFlagResetFilters(false));
  }, [resetDate]);

  React.useEffect(() => {
    if (startDate) {
      const time = startDate.toISOString();

      dispatch(setFilterStartDate(time));
    }
    if (endDate) {
      const time = endDate.toISOString();

      dispatch(setFilterEndDate(time));
    }
  }, [startDate, endDate]);

  return (
    <>
      <FormGroup as={Col}>
        <DatePicker
          date={startDate}
          onDateChange={setStartDate}
          locale={enGB}
          format="dd/MM/yyyy"
        >
          {({ inputProps, focused }) => (
            <Form.Control
              className={"input" + (focused ? " -focused" : "")}
              {...inputProps}
            />
          )}
        </DatePicker>
      </FormGroup>
      <FormGroup as={Col}>
        <DatePicker date={endDate} onDateChange={setEndDate} locale={enGB}>
          {({ inputProps, focused }) => (
            <Form.Control
              className={"input" + (focused ? " -focused" : "")}
              {...inputProps}
            />
          )}
        </DatePicker>
      </FormGroup>
    </>
  );
};

export default DateFilters;
