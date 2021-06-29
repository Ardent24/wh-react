import React from "react";
import styled from "styled-components";
import { Col, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { ru } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import SvgCalendar from "../../svg/SvgCalendar";
import "react-nice-dates/build/style.css";
import "./CalendarCreateTask.scss";

const Required = styled.span`
  color: #ee4586;
`;

const CalendarCreatetask = ({ control }) => {
  const defaultValue = {};

  const onStartDateChange = (onChange, formValue) => (value) => {
    onChange({
      ...formValue,
      startDate: value,
    });
  };

  const onEndDateChange = (onChange, formValue) => (value) => {
    onChange({
      ...formValue,
      endDate: value,
    });
  };

  return (
    <Controller
      control={control}
      name="date"
      defaultValue={defaultValue}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <DateRangePicker
          startDate={value.startDate}
          endDate={value.endDate}
          onStartDateChange={onStartDateChange(onChange, value)}
          onEndDateChange={onEndDateChange(onChange, value)}
          minimumDate={new Date()}
          minimumLength={0}
          format="dd/MM/yyyy"
          locale={ru}
        >
          {({ startDateInputProps, endDateInputProps, focus }) => (
            <Form.Row className="date-range">
              <Form.Group as={Col} className="position-relative">
                <Form.Label>
                  From <Required>*</Required>
                </Form.Label>
                <Form.Control
                  type="text"
                  className={
                    "input" + (focus === START_DATE ? " -focused" : "")
                  }
                  {...startDateInputProps}
                  placeholder="To"
                />
                <SvgCalendar />
              </Form.Group>
              <Form.Group as={Col} className="position-relative">
                <Form.Label>
                  To <Required>*</Required>
                </Form.Label>
                <Form.Control
                  className={"input" + (focus === END_DATE ? " -focused" : "")}
                  {...endDateInputProps}
                  placeholder="From"
                />
                <SvgCalendar />
              </Form.Group>
            </Form.Row>
          )}
        </DateRangePicker>
      )}
    />
  );
};

export default CalendarCreatetask;
