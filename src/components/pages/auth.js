import React, { Component } from "react";
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/wojak.png";

export default class Auth extends Component {
  render() {
    return (
      <div className="auth-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />

        <div className="right-column">
          <h1>Login component goes here...</h1>
        </div>
      </div>
    );
  }
}