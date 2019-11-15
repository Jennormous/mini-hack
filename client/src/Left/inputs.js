import React, { Component } from "react";
import Classes from "./classes";
import Races from "./races";
import axios from "axios";
const CORS = "https://cors-anywhere.herokuapp.com/";

export default class inputs extends Component {
  state = {
    classes: []
  };
  componentDidMount() {
    axios.get(`${CORS}http://dnd5eapi.co/api/classes`).then(res => {
      res.data.results.forEach(result => {
        axios.get(result.url).then(response => {
          this.setState({ classes: [...this.state.classes, response.data] });
        });
      });
    });
  }

  render() {
    this.state.classes.sort(function(a, b) {
      return a.index - b.index;
    });
    console.log(this.state.classes);
    return (
      <div>
        <Classes classes={this.state.classes} />
        {/* <Races /> */}
      </div>
    );
  }
}
