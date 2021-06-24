import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import User from "../src/pages/User";
import Login from "../src/pages/Login";
import Tabbar from "../src/layout/TabContainer";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default Routes;
