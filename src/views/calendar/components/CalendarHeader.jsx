import React from "react";

import "../styles/Calendar.scss";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import SvgArrowRight from "./svg/SvgArrowRight";
import SvgArrowLeft from "./svg/SvgArrowLeft";

const CalendarHeader = () => {
  return (
    <header className="calendar-header">
      <div className="calendar-header__wrap">
        <Button className="calendar-header__btn">
          <SvgArrowLeft />
        </Button>
        <DropdownButton title="январь 2021" variant="outline-primary">
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
        <Button className="calendar-header__btn">
          <SvgArrowRight />
        </Button>
      </div>
    </header>
  );
};

export default CalendarHeader;
