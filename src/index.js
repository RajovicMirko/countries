import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import Layout from "./components/Layout";
import Theme from "./components/Theme";
import Api from "./api";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <Api>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </Api>
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
