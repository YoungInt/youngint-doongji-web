import React from "react";
import MapSearchPC from "./MapSearchPC";
import MapSearchResultPC from "./MapSearchResultPC";

export default class Map extends React.Component {
  componentDidMount() {
    this.props.drawMap();
  }

  render() {
    const style = {
      width: "700px",
      height: "600px"
    };
    const {
      filteredData,
      movePosition,
      getLocation,
      onSearchFilter
    } = this.props;

    return (
      <React.Fragment>
        <div id="map" className="map" style={style} />

        <button onClick={getLocation}>위치 가져오기</button>
        <MapSearchPC onSearchFilter={onSearchFilter} />
        <MapSearchResultPC
          filteredData={filteredData}
          onClickPoint={movePosition}
        />
      </React.Fragment>
    );
  }
}
