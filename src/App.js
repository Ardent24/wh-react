import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./views/header/Header";
import Layout from "./views/layout/Layout";
import PageRouter from "./router/PageRouter";
import Modals from "./views/modals/Modals";

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/global.scss'

export default function App() {
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
