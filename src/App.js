import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  browserHistory
} from "react-router-dom";
import MapPage from "./pages/MapPage";
import MainPage from "./pages/MainPage";
import HappyPage from "./pages/HappyPage";
import PolaPage from "./pages/PolaPage";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/pola" component={PolaPage} />
          <Route pah="/happy" component={HappyPage} />
          {/* <Route path="/map/:id" component={MapPage} />
          <Route path="/map/" component={MapPage} /> */}
          {/* <Route path="/map/:id" component={MapPage} />
          <Route path="/map/" component={MapPage} /> */}
        </Switch>
      </Router>
    );
  }
}
