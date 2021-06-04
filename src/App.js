import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./views/header/Header";
import Layout from "./views/layout/Layout";
import PageRouter from "./router/PageRouter";

import { getUserApi } from "./api/authorizationAPI";
import { isAuthUser, setAuthUserPending } from "./store/reducers/authReducer";

const promiseUser = getUserApi();

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    promiseUser
      .then((res) => {
        const user = res.data.data;

        dispatch(isAuthUser([user, true]));
        dispatch(setAuthUserPending(false));
      })
      .catch(() => {
        dispatch(isAuthUser([{}, false]));
        dispatch(setAuthUserPending(false));
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Layout>
          <PageRouter />
        </Layout>
      </div>
    </Router>
  );
}
