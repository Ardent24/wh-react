import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Calendar from "../views/calendar/Calendar";
import Login from "../views/login/Login";
import Contacts from "../views/contacts/Contacts";
import Tasks from "../views/tasks/Tasks";
import TasksFront from "../views/tasksFront/TasksFront";
import Hours from "../views/hours/Hours";
import PrivateRoute from "./PrivateRoute";

const PageRouter = () => {
  const location = useLocation().pathname;

  return (
    <Switch>
      {location === "/wh-react" && <Redirect to="/calendar/" />}
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/calendar" exact component={Calendar} />
      <PrivateRoute path="/contacts" exact component={Contacts} />
      <PrivateRoute path="/tasks" exact component={Tasks} />
      <PrivateRoute path="/tasks-front" exact component={TasksFront} />
      <PrivateRoute path="/hours" exact component={Hours} />
      <PrivateRoute path="/calendar/:year/:month" exact component={Calendar} />
    </Switch>
  );
};

export default PageRouter;
