import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Map from "./components/Map";

export default class App extends Component {
  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}
