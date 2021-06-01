import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Loader from "../views/loader/Loader";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuth = useSelector((state) => state.auth.isAuthUser);
  const isAuthLoading = useSelector((state) => state.auth.isLoading);

  const privateRender = () => {
    if (isAuthLoading) {
      return <Loader />;
    }

    if (isAuth) {
      return <Component {...props} />;
    }

    return <Redirect to="/login" />;
  };

  return <Route {...rest} render={privateRender} />;
};
export default PrivateRoute;
