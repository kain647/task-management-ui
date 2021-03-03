import React from "react";
import ReactDOM from "react-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import "./index.css";
import Task from "./task-management/index";

TimeAgo.addDefaultLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>,
  document.getElementById("root")
);
