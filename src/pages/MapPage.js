import React from "react";
import Map from "../components/Map";
import { MapProvider, MapConsumer } from "../context/MapContext";
import { withRouter } from "react-router";

class MapPage extends React.Component {
  render() {
    const { match, location, history } = this.props;

    return (
      <MapProvider id={match.params.id} history={history} location={location}>
        <MapConsumer>
          {({
            drawMap,
            movePosition,
            getLocation,
            onSearchFilter,
            filteredData,
            clickPoint,
            getLatLng
          }) => (
            <Map
              match={match}
              getLatLng={getLatLng}
              match={match}
              drawMap={drawMap}
              getLocation={getLocation}
              onSearchFilter={onSearchFilter}
              movePosition={movePosition}
              filteredData={filteredData}
              clickPoint={clickPoint}
            />
          )}
        </MapConsumer>
        <div>{match.params.id}</div>
      </MapProvider>
    );
  }
}

const MapPageWithRouter = withRouter(MapPage);

export default MapPageWithRouter;
