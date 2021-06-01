import React from "react";
import { Redirect } from "react-router-dom";

import CalendarHeader from "./components/CalendarHeader";
import CalendarMain from "./components/CalendarMain";

import "./styles/Calendar.scss";

const Calendar = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="calendar">
      <div className="calendar-wrap">
        <CalendarHeader />
        <CalendarMain />
      </div>
    </section>
  );
};

export default Calendar;
