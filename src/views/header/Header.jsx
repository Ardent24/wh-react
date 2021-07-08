import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/img/logo.png";

import "./styles/Header.scss";

const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <NavLink
        to="/calendar"
        className="header-nav__link"
        activeClassName="active"
      >
        <img src={img} className="header-logo" alt="logo" />
      </NavLink>
      <nav className="header-nav">
        <NavLink
          to="/calendar"
          className="header-nav__link"
          activeClassName="active"
        >
          Calendar
        </NavLink>
        <NavLink
          to="/contacts"
          className="header-nav__link"
          activeClassName="active"
        >
          Contacts
        </NavLink>
        <NavLink
          to="/tasks"
          className="header-nav__link"
          activeClassName="active"
        >
          Tasks
        </NavLink>
        <NavLink
          to="/tasks-front"
          className="header-nav__link"
          activeClassName="active"
        >
          Tasks-front
        </NavLink>
        <NavLink
          to="/hoursDay"
          className="header-nav__link"
          activeClassName="active"
        >
          Hours
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
