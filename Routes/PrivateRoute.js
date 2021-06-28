import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default connect(({ user }) => ({ user }))(
  class PrivateRoute extends Component {
    render() {
      const {
        user: { isLogin },
        path,
        component,
      } = this.props;
      if (isLogin) {
        return <Route path={path} component={component}></Route>;
      }
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { Redirect: location.pathname },
          }}
        ></Redirect>
      );
    }
  }
);
