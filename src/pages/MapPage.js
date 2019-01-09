import React from "react";
import Map from "../components/Map";
import { MapProvider, MapConsumer } from "../context/MapContext";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";

class MapPage extends React.Component {
  render() {
    const { match, location, history } = this.props;

    return (
      <MapProvider id={match.params.id} history={history} location={location}>
        <MapConsumer>
          {({ drawMap, movePosition, getLocation }) => (
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>네임 스티커 지도 😈 👿 | 영인터내셔널</title>
                <link rel="" href="" />
              </Helmet>
              <Map
                match={match}
                drawMap={drawMap}
                getLocation={getLocation}
                movePosition={movePosition}
              />
              <div className="test">{match.params.id}</div>
            </div>
          )}
        </MapConsumer>
      </MapProvider>
    );
  }
}

const MapPageWithRouter = withRouter(MapPage);

export default MapPageWithRouter;
