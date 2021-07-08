import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cutZeroInNum } from "../../../../modules/cutZeroInNum";
import { cutMonth } from "../../../../modules/date";
import { stateCalendar } from "../../../../store/reducers/calendarReducer";
import CalendarDayHoliday from "./CalendarDayHoliday";
import SvgClock from "../svg/SvgClock";

const CalendarDay = ({ date, dataDay }) => {
  const weekday = +dataDay.weekday;
  const holiday = dataDay.holiday;

  const holidayType = holiday ? holiday.type : "";
  const hours = dataDay.hours ? dataDay.hours : "0";

  const { dateNow, routerCalendar } = useSelector(stateCalendar);

  const routeMonth = cutMonth(routerCalendar, "/");
  const propsMonth = cutMonth(date, "-");
  const editNumDay = cutZeroInNum(date);

  const defaultClass = "calendar-main__elem day";
  const dayClass = cx(defaultClass, {
    "day-off": weekday === 6 || weekday === 7 || holidayType === "Holiday",
    "work-day": weekday > 0 && weekday < 6,
    "day-now": dateNow.date === date && propsMonth === routeMonth,
    "last-day": propsMonth !== routeMonth,
    holiday,
  });

  return (
    <div className={dayClass}>
      <div className="day-box">
        <span className="day-box__num">{editNumDay}</span>
        <SvgClock />
      </div>
      <p className="day-hours">{hours}</p>
      <CalendarDayHoliday holidayType={holidayType} />
    </div>
  );
};

CalendarDay.propTypes = {
  date: PropTypes.string.isRequired,
  dataDay: PropTypes.object.isRequired,
};

export default CalendarDay;
