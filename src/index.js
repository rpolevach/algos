import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Greetings from "./Greetings/Greetings";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";
import Task4 from "./Task4/Task4";
import Task5 from "./Task5/Task5";

ReactDOM.render(
  <Router>
    <App />
    <Route exact path="/" component={Greetings} />
    <Route path="/task2" component={Task2} />
    <Route path="/task3" component={Task3} />
    <Route path="/task4" component={Task4} />
    <Route path="/task5" component={Task5} />
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
