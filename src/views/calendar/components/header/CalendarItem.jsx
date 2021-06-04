import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { setRouterCalendar } from "../../../../store/reducers/calendarReducer";
import { changeMonth } from "../../../../modules/date";

const CalendarItem = ({ year, month }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const stringDate = `${year}/${month}`;

  const clickHandleRoute = () => {
    history.push(`/calendar/${stringDate}`);
    dispatch(setRouterCalendar(stringDate));
  };

  return (
    <Dropdown.Item
      as="button"
      className="calendar-header__item"
      onClick={clickHandleRoute}
    >
      {changeMonth(month)} {year}
    </Dropdown.Item>
  );
};

CalendarItem.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

export default CalendarItem;
