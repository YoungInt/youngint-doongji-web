import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HappyPage from "./pages/HappyPage";
import PolaPage from "./pages/PolaPage";
import { LanguageProvider, LanguageConsumer } from "./context/LanguageContext";
import withDevice from "./HOC/withDevice";

class App extends Component {
  render() {
    const { screenWidth } = this.props;
    return (
      <Router>
        <LanguageProvider>
          <LanguageConsumer>
            {value => (
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <MainPage screenWidth={screenWidth} />}
                />
                <Route
                  path="/polapolar"
                  component={() => (
                    <PolaPage value={value} screenWidth={screenWidth} />
                  )}
                />
                <Route
                  pah="/happy"
                  component={() => (
                    <HappyPage value={value} screenWidth={screenWidth} />
                  )}
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

export default withDevice(App);
