import React from "react";
import cx from "classnames";
import { useSelector } from "react-redux";

import { cutZeroInNum } from "../../../../modules/cutZeroInNum";
import { cutMonth } from "../../../../modules/date";

import CalendarDayHoliday from "./CalendarDayHoliday";
import SvgClock from "../svg/SvgClock";


const CalendarDay = ({ date, dataDay }) => {
  const weekday = +dataDay.weekday;
  const holiday = dataDay.holiday;

  const holidayType = holiday ? holiday.type : "";
  const hours = dataDay.hours ? dataDay.hours : "0";

  const { dateNow, routerCalendar } = useSelector((state) => state.calendar);

  const routeMonth = cutMonth(routerCalendar, "/");
  const propsMoth = cutMonth(date, "-");
  const editNumDay = cutZeroInNum(date);

  const defultClass = "calendar-main__elem day";
  const dayClass = cx(defultClass, {
    "day-off": weekday === 6 || weekday === 7 || holidayType === "Holiday",
    "work-day": weekday > 0 && weekday < 6,
    "day-now": dateNow.date === date && propsMoth === routeMonth,
    "last-day": propsMoth !== routeMonth,
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

export default CalendarDay;
