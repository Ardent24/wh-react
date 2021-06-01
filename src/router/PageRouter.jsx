import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Calendar from "../views/calendar/Calendar";
import Login from "../views/login/Login";
import Contacts from "../views/contacts/Contacts";

const PageRouter = ({ user }) => {
  const isAuth = useSelector((state) => state.auth.isAuthUser);

  return (
    <>
      <Redirect to="/login" />
      <Switch>
        <Route
          path="/login"
          exact
          component={() => <Login authorized={isAuth} user={user} />}
        />
        <Route
          path="/calendar"
          exact
          component={() => <Calendar authorized={isAuth} />}
        />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
    </>
  );
};
export default PageRouter;
