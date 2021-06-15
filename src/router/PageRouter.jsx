import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Calendar from "../views/calendar/Calendar";
import Login from "../views/login/Login";
import Contacts from "../views/contacts/Contacts";
import PrivateRoute from "./PrivateRoute";

const PageRouter = () => {
  const location = useLocation().pathname;

  return (
    <Switch>
      {location === "/" && <Redirect to="/calendar/" />}
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/calendar" exact component={Calendar} />
      <PrivateRoute path="/contacts" exact component={Contacts} />
      <PrivateRoute path="/calendar/:year/:month" exact component={Calendar} />
    </Switch>
  );
};

export default PageRouter;
