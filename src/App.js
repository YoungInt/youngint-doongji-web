import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Map from "./components/Map";
import { MapProvider, MapConsumer } from "./context/MapContext";

export default class App extends Component {
  render() {
    return (
      <MapProvider>
        <MapConsumer>
          {({
            drawMap,
            movePosition,
            getLocation,
            onSearchFilter,
            filteredData,
            clickPoint
          }) => (
            <Map
              drawMap={drawMap}
              getLocation={getLocation}
              onSearchFilter={onSearchFilter}
              movePosition={movePosition}
              filteredData={filteredData}
              clickPoint={clickPoint}
            />
          )}
        </MapConsumer>
      </MapProvider>
    );
  }
}
