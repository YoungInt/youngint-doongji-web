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
          {({ drawMap, movePosition, getLocation }) => (
            <Map
              match={match}
              drawMap={drawMap}
              getLocation={getLocation}
              movePosition={movePosition}
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
