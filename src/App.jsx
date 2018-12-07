import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
ReactDOM.render(
  <App />,

  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./App.js", () => {
    import("./App.js").then(() => render(App));
  });
}
