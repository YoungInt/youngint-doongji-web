import React from "react";
import MapSearchPC from "./MapSearchPC";
import MapSearchResultPC from "./MapSearchResultPC";
import { MapConsumer } from "../context/MapContext";

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
    // 라우터 url접속 시 처리
    const id = this.props.match.params.id;
    const { prevId } = this.state;

    if (prevId !== id) {
      if (id) {
        this.props.movePosition(id);
      } else {
        this.props.movePosition(0);
      }
      this.setState({
        prevId: id
      });
    }
  }
  render() {
    const style = {
      width: "700px",
      height: "600px"
    };
    const { getLocation } = this.props;

    return (
      <div>
        {/*  지도 */}
        <div id="map" className="map" style={style} />
        <button onClick={getLocation}>위치 가져오기</button>
        <MapSearchPC />
        <MapSearchResultPC />
      </div>
    );
  }
}
