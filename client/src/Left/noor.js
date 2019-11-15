import React, { Component } from "react";
import axios from "axios";
const CORS = "https://cors-anywhere.herokuapp.com/";
export default class noor extends Component {
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
    console.log(this.state.classes);
    return <div></div>;
  }
}
