import React from "react";
import PropTypes from "prop-types";
import SvgEmoji from "../svg/SvgEmoji";
import SvgNeutral from "../svg/SvgNeutral";

const CalendarDayHoliday = ({ holidayType }) => {
  if (holidayType === "Holiday") {
    return (
      <div className="block-visible">
        <SvgEmoji />
      </div>
    );
  }
  if (holidayType === "Worked") {
    return (
      <div className="block-visible">
        <SvgNeutral />
      </div>
    );
  }
  return <></>;
};

CalendarDayHoliday.propTypes = {
  holidayType: PropTypes.string.isRequired,
};

export default CalendarDayHoliday;
