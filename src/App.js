import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HappyPage from "./pages/HappyPage";
import PolaPage from "./pages/PolaPage";
import { LanguageProvider, LanguageConsumer } from "./context/LanguageContext";

export default class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <LanguageProvider>
          <LanguageConsumer>
            {value => (
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route
                  path="/pola"
                  component={() => <PolaPage value={value} />}
                />
                <Route
                  pah="/happy"
                  component={() => <HappyPage value={value} />}
                />
                {/* <Route path="/map/:id" component={MapPage} />
          <Route path="/map/" component={MapPage} /> */}
                {/* <Route path="/map/:id" component={MapPage} />
          <Route path="/map/" component={MapPage} /> */}
              </Switch>
            )}
          </LanguageConsumer>
        </LanguageProvider>
      </Router>
    );
  }
}
