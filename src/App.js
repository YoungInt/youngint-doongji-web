import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import TeamPC from "./components/TeamPC";

export default class App extends Component {
  render() {
    return (
      <div>
        <TeamPC />
      </div>
    );
  }
}
