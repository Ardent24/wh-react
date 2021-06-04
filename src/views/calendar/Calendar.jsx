import React from "react";
import CalendarHeader from "./components/CalendarHeader";
import CalendarMain from "./components/CalendarMain";

import "./styles/Calendar.scss";

const Calendar = () => {
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
