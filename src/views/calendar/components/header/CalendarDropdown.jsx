import React from "react";
import { useSelector } from "react-redux";
import { DropdownButton } from "react-bootstrap";

import { changeMonth, cutDate } from "../../../../modules/date";
import CalendarItem from "./CalendarItem";

const CalendarDropdown = () => {
  const routerCalender = useSelector((state) => state.calendar.routerCalendar);

  const arrayRouterCalendar = cutDate(routerCalender);

  const year = +arrayRouterCalendar[0];
  const month = +arrayRouterCalendar[1];

  const titleNow = `${changeMonth(month)} ${year}`;
  const numberMonths = new Array(12);

  return (
    <DropdownButton title={titleNow} variant="outline-primary">
      {[...numberMonths].map((_, i) => (
        <CalendarItem year={year} month={i + 1} key={i} />
      ))}
    </DropdownButton>
  );
};

export default CalendarDropdown;
