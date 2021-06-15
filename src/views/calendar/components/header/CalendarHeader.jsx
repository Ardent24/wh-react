import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { setRouterCalendar } from "../../../../store/reducers/calendarReducer";
import SvgArrowRight from "../svg/SvgArrowRight";
import SvgArrowLeft from "../svg/SvgArrowLeft";
import CalendarDropdown from "./CalendarDropdown";

import { incrementMonth, decrementMonth } from "../../../../modules/date";

import "../../styles/Calendar.scss";

const CalendarHeader = () => {
  const stateRoute = useSelector((state) => state.calendar.routerCalendar);

  const history = useHistory();
  const dispatch = useDispatch();

  const clcBtnIncrement = () => {
    const newStateRoute = incrementMonth(stateRoute);

    dispatch(setRouterCalendar(newStateRoute));
    history.push(`/calendar/${newStateRoute}`);
  };
  const clcBtnDecrement = () => {
    const newStateRoute = decrementMonth(stateRoute);

    dispatch(setRouterCalendar(newStateRoute));
    history.push(`/calendar/${newStateRoute}`);
  };

  return (
    <header className="calendar-header">
      <div className="calendar-header__wrap">
        <Button className="calendar-header__btn" onClick={clcBtnDecrement}>
          <SvgArrowLeft />
        </Button>
        <CalendarDropdown />
        <Button className="calendar-header__btn" onClick={clcBtnIncrement}>
          <SvgArrowRight />
        </Button>
      </div>
    </header>
  );
};

export default CalendarHeader;
