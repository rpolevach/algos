import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Task2 from "./Task2/Task2";
import Greetings from "./Greetings/Greetings";

ReactDOM.render(
  <Router>
    <App />
    <Route exact path="/" component={Greetings} />
    <Route path="/task2" component={Task2} />
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
