import React from "react";
import * as data from "../API/vending_machine_map.json";

export default class MapPC extends React.Component {
  state = {
    Lat: 33.450701,
    Lng: 126.570667,
    daumMap: null
  };

  componentDidMount() {
    this.drawMap();
  }
  // 지도를 그리는 함수
  drawMap = () => {
    this.getLocation();

    const { Lat, Lng } = this.state;
    const mapEl = document.getElementById("map");
    let daumMap = new daum.maps.Map(mapEl, {
      center: new daum.maps.LatLng(Lat, Lng)
    });
    this.drawMaker(daumMap);
    this.setState({
      daumMap
    });
  };
  // 마커 생성 함수
  drawMaker = daumMap => {
    data.data.map(position => {
      var imageSize = new daum.maps.Size(24, 35);
      const imageSrc =
        "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png";
      var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);
      const marker = new daum.maps.Marker({
        position: new daum.maps.LatLng(
          position.map.latitude,
          position.map.longitude
        ),
        title: position.vending_machine.place,
        image: markerImage,
        map: daumMap
      });
    });
  };
  // 사용자의 좌표값을 가져오는 함수
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("위치 안잡힘");
    }
  };
  // 현재 위치로 상태 좌표를 업데이트하는 함수
  showPosition = async position => {
    await this.setState({
      Lat: position.coords.latitude,
      Lng: position.coords.longitude
    });
    const moveLatLon = new daum.maps.LatLng(this.state.Lat, this.state.Lng);
    this.state.daumMap.setCenter(moveLatLon);
  };

  render() {
    const style = {
      width: "700px",
      height: "600px"
    };
    return (
      <React.Fragment>
        <div id="map" className="map" style={style} />
        <div>
          {this.state.Lat}/{this.state.Lng}
        </div>
      </React.Fragment>
    );
  }
}
