import React from "react";
import ReactDOM from "react-dom";
import "antd-mobile/dist/antd-mobile.css";
import "tailwindcss/dist/tailwind.css";
import { Provider } from "react-redux";
import store from "./src/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("app")
);
