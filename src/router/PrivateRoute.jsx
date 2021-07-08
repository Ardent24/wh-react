import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import Loader from "../views/loader/Loader";
import {stateIsAuth, stateIsAuthLoading} from "../store/reducers/authReducer";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  const isAuth = useSelector(stateIsAuth);
  const isAuthLoading = useSelector(stateIsAuthLoading);

  const privateRender = () => {
    if (isAuthLoading) return <Loader />;
    if (isAuth) return <Component {...props} />;

    return <Redirect to="/login" />;
  };

  return <Route {...rest} render={privateRender} />;
};

export default PrivateRoute;
