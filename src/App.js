import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./views/header/Header";
import Layout from "./views/layout/Layout";
import ModalContact from "./views/modal/Modal";
import PageRouter from "./router/PageRouter";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ModalContact />
        <Header />
        <Layout>
          <PageRouter />
        </Layout>
      </div>
    </Router>
  );
}
