import React from "react";
import MapSearchPC from "./MapSearchPC";
import MapSearchResultPC from "./MapSearchResultPC";

export default class Map extends React.Component {
  prevId = null;
  state = {
    matchId: null,
    prevId: null
  };
  componentDidMount() {
    console.log("map");
    this.props.drawMap();
  }
  componentDidUpdate() {
    const id = this.props.match.params.id;
    const { prevId } = this.state;
    // id로 접속 시에
    // id 가 없을 때, /map으로 접속 시에는 데이터의 0번째 지점을 보여준다.
    // id가 있고 prevId !== id 가 같지 않을 때 지금 들어온 id 로 지도를 이동한다.
    // id가 같을 떄는 현상 유지

    if (!id) {
      this.props.getLatLng(0);
    } else if (prevId !== id) {
      this.setState({
        prevId: id
      });
      this.props.getLatLng(id);
    }
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
          id={this.props.id}
          filteredData={filteredData}
          onClickPoint={movePosition}
        />
      </React.Fragment>
    );
  }
}
