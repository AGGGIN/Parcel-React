import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default connect(({ user }) => ({ user }), {
  loginClick: () => ({ type: "loginSuccess" }),
})(
  class PrivateRoute extends Component {
    render() {
      const {
        loginClick,
        user: { isLogin },
        component,
      } = this.props;
      if (isLogin) {
        const redirect = location.state ? location.state.redirect : "/";
        return <Redirect to={redirect}></Redirect>;
      }
      return (
        <div>
          <button onClick={loginClick}>Login</button>
        </div>
      );
    }
  }
);
