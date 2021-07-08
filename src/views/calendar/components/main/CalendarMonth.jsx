import React from "react";
import PropTypes from "prop-types";
import CalendarDay from "./CalendarDay";

const CalendarMonth = ({ dataDays }) => {
  return (
    <>
      {Object.keys(dataDays).map((day) => {
        return (
          <CalendarDay key={`key-${day}`} date={day} dataDay={dataDays[day]} />
        );
      })}
    </>
  );
};

CalendarMonth.propTypes = {
  dataDays: PropTypes.object.isRequired,
};

export default CalendarMonth;
