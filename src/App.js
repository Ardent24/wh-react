import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";
import Header from "./views/header/Header";
import Layout from "./views/layout/Layout";
import PageRouter from "./router/PageRouter";
import Modals from "./views/modals/Modals";
import { dateNow } from "./modules/date";
import {
  setNowDate,
  setRouterCalendar,
} from "./store/reducers/calendarReducer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";

export default function App() {
  React.useEffect(() => {
    const date = dateNow();
    const dateRoute = `${date.year}/${date.month}`;

    store.dispatch(setNowDate(date));
    store.dispatch(setRouterCalendar(dateRoute));
  }, []);

  return (
    <Router>
      <Modals />
      <div className="App">
        <Header />
        <Layout>
          <PageRouter />
        </Layout>
      </div>
    </Router>
  );
}
