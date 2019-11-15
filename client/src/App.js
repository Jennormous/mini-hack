import React, { Component } from "react";
import Info from "./Right/info";
import Inputs from "./Left/inputs";

export default class App extends Component {
  render() {
    return (
      <main>
        <div>
          <Inputs />
        </div>
        <div>{/* <Info /> */}</div>
      </main>
    );
  }
}
