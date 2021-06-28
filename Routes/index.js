import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../src/pages/Home";
import User from "../src/pages/User";
import Login from "../src/pages/Login";
import List from "../src/pages/List";
import Tabbar from "../src/layout/TabContainer";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/user" component={User} /> */}
        <PrivateRoute path="/user" component={User}></PrivateRoute>
        <Route path="/list" component={List} />
      </Switch>
    </Router>
  );
}

export default Routes;
