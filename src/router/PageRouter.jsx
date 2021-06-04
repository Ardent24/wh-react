import React from "react";
import { Switch, Route } from "react-router-dom";
import Calendar from "../views/calendar/Calendar";
import Login from "../views/login/Login";
import Contacts from "../views/contacts/Contacts";
import PrivateRoute from "./PrivateRoute";

const PageRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/calendar" exact component={Calendar} />
        <PrivateRoute path="/contacts" exact component={Contacts} />
      </Switch>
    </>
  );
};
export default PageRouter;
