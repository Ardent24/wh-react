import React, { useEffect } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Header from "./views/header/Header";
import Layout from "./views/layout/Layout";
import PageRouter from "./router/PageRouter";
import { getUserApi, logOutApi } from "./api/authorizationAPI";
import { isAuthUser } from "./store/authReducer";

const promiseUser = getUserApi();
// const promiseUser = logOutApi();

export default function App() {
  const user = useSelector((state) => state.auth.dataUser);
  const dispatch = useDispatch();

  useEffect(() => {
    promiseUser
      .then((res) => {
        const user = res.data.data;
        dispatch(isAuthUser([user, true]));
      })
      .catch(() => {
        dispatch(isAuthUser([{}, false]));
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Layout>
          <PageRouter user={user} />
        </Layout>
      </div>
    </Router>
  );
}
