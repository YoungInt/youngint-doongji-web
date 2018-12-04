import React from "react";
import * as nameStickerData from "../API/vending_machine_map.json";
import MapSearchPC from "./MapSearchPC";
import MapSearchResultPC from "./MapSearchResultPC";

export default class Map extends React.Component {
  state = {
    Lat: 33.450701,
    Lng: 126.570667,
    daumMap: null,
    filteredData: null
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
    nameStickerData.data.map(position => {
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
      navigator.geolocation.getCurrentPosition(this.moveCurrentPosition);
    } else {
      console.log("위치 안잡힘");
    }
  };

  // 현재 위치로 상태 좌표를 업데이트하는 함수
  moveCurrentPosition = position => {
    console.log("hi");
    console.log(position);
    this.setState({
      Lat: position.coords.latitude,
      Lng: position.coords.longitude
    });

    this.movePosition(this.state.Lat, this.state.Lng);
  };

  movePosition = (lat, lng) => {
    const moveLatLng = new daum.maps.LatLng(lat, lng);
    this.state.daumMap.setCenter(moveLatLng);
  };

  // 검색 기능
  onSearchFilter = (district, address) => {
    this.filteringData(district, address);
  };

  // 검색 결과 데이터 필터링
  filteringData = (district, text) => {
    const filteredData = nameStickerData.data.filter(point => {
      const address = point.map.jibunAddress;
      if (address && district === "전체" && address.includes(text)) {
        return point;
      } else if (
        address &&
        address.includes(district) &&
        address.includes(text)
      ) {
        return point;
      }
    });
    // 필터링 된 데이터 지점이 0보다 크면, 배열의 첫 번째 장소로 지도를 이동
    if (filteredData.length > 0) {
      const firstPoint = filteredData[0].map;
      this.movePosition(firstPoint.latitude, firstPoint.longitude);
      this.setState({
        filteredData
      });
      //  없으면 filtereData값을 null 값으로 초기화
    } else {
      this.state.filteredData &&
        this.setState({
          filteredData: null
        });
    }
    // 재 검색할 경우 검색 결과가 없으면 지도를 이동하진 않고 전 검색 지도로 사용함
  };

  render() {
    const style = {
      width: "700px",
      height: "600px"
    };
    const { filteredData } = this.state;
    return (
      <React.Fragment>
        <div id="map" className="map" style={style} />
        <div>
          {this.state.Lat}/{this.state.Lng}
        </div>
        <MapSearchPC onSearchFilter={this.onSearchFilter} />
        <MapSearchResultPC
          filteredData={filteredData}
          onClickPoint={this.movePosition}
        />
      </React.Fragment>
    );
  }
}
