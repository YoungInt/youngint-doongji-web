import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import MapCC from "./components/MapPC";
export default class App extends Component {
  render() {
    return (
      <div>
        <MapPC />
      </div>
    );
  }
}
