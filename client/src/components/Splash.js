import React, { Component } from "react";

export default class Splash extends Component {
  render() {
    return (
      <div className="splash__wrapper">
        <div className="splash__card">
          <div className="splash__logowrap">
            <img
              className="splash__logo"
              src={require("../assets/images/mini-hack-logo.svg")}
            />
          </div>
          <h1 className="splash__url">drag.in </h1>
          <h1 className="splash__title">D&D 5E CHARSHEET</h1>
          <button className="splash__button">BUILD</button>
        </div>
      </div>
    );
  }
}
