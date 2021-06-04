import React from "react";
import CalendarDay from "./CalendarDay";

const CalendarMonth = ({ dataDays }) => {
  return (
    <>
      {Object.keys(dataDays).map((day) => {
        return (
          <CalendarDay
            key={`key-${day}`}
            date={day}
            dataDay={dataDays[day]}
          />
        );
      })}
    </>
  );
};

export default CalendarMonth;
