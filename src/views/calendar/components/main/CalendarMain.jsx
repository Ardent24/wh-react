import React from "react";

import CalendarWeek from "./CalendarWeek";
import CalendarMonth from "./CalendarMonth";

import "../../styles/Calendar.scss";

const CalendarMain = ({ dataDays }) => {
  return (
    <main className="calendar-main">
      <div className="calendar-main__line" />
      <div className="calendar-main__box">
        <CalendarWeek />
        <CalendarMonth dataDays={dataDays} />
      </div>
    </main>
  );
};

export default CalendarMain;
