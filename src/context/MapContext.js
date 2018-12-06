import React from "react";
import * as nameStickerData from "../API/vending_machine_map.json";
// 네임 스티커 자판기의 아이디 값은 인덱스 값임
const { Provider, Consumer } = React.createContext();

let prev_infowindow = null;

class MapProvider extends React.Component {
  state = {
    Lat: nameStickerData.data[0].map.latitude,
    Lng: nameStickerData.data[0].map.longitude,
    daumMap: null,
    filteredData: null
  };
  async componentDidMount() {
    await this.drawMap();
  }
  // 지도를 그리는 함수
  drawMap = () => {
    const { Lat, Lng } = this.state;
    const mapEl = document.getElementById("map");
    let daumMap = new daum.maps.Map(mapEl, {
      center: new daum.maps.LatLng(Lat, Lng)
    });
    this.setState({
      daumMap
    });
    this.drawMarker(daumMap);
  };

  // id값만 가져와서 함수를 사용할 수 있도록 수정하기
  movePosition = id => {
    // setLevel 설정
    const setLevel = 5;
    const data = nameStickerData.data[id];
    const { latitude, longitude } = data.map;
    const { daumMap } = this.state;
    const moveLatLng = new daum.maps.LatLng(latitude, longitude);
    daumMap.setCenter(moveLatLng);
    daumMap.setLevel(setLevel);
    this.drawInfo(data.vending_machine.place, this.state.daumMap, data.marker);
  };
  changeUrl = id => {
    this.props.history.replace(`/map/${id}`);
  };

  // 마커 생성 함수
  drawMarker = daumMap => {
    nameStickerData.data.map((point, index) => {
      var imageSize = new daum.maps.Size(24, 35);
      // 추후 마커 이미지 포인트별로 수정하기
      const imageSrc =
        "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png";
      var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);
      const position = new daum.maps.LatLng(
        point.map.latitude,
        point.map.longitude
      );
      const marker = new daum.maps.Marker({
        position,
        title: point.vending_machine.place,
        image: markerImage,
        map: daumMap,
        clickable: true
      });
      // 배열에 마커 추가
      nameStickerData.data[index].marker = marker;
      // 마커 인포 윈도우
      const iwContent = point.vending_machine.place;
      // 마커 클릭 시 지도 이동 이벤트
      daum.maps.event.addListener(marker, "click", () => {
        this.drawInfo(iwContent, daumMap, marker);
        // 마커 클릭 시 라우터 url 변경
        this.props.history.replace(`/map/${index}`);
      });
    });
  };

  drawInfo = (content, map, marker) => {
    content = `<div>${content}</div>`;
    // 커스텀 오버레이를 생성합니다
    var infowindow = new daum.maps.InfoWindow({
      content: content,
      removable: true
    });
    prev_infowindow && prev_infowindow.close();
    // 커스텀 오버레이를 지도에 표시합니다
    infowindow.open(map, marker);
    prev_infowindow = infowindow;
  };

  // test

  showLocation = position => {
    console.log("show location");
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude, longitude);
    this.movePosition(latitude, longitude);
  };

  errorHandler = err => {
    console.log(err);
    if (err.code == 1) {
      alert("Error: Access is denied!");
    } else if (err.code == 2) {
      alert(err.message);
    }
  };

  getLocation = () => {
    console.log("get location");
    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      const options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(
        this.showLocation,
        this.errorHandler,
        options
      );
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
  };

  // 검색 기능
  onSearchFilter = (district, address) => {
    this.filteringData(district, address);
  };
  // 검색 결과 데이터 필터링
  filteringData = (district, text) => {
    const textArray = text.split(" ").filter(text => text !== "");
    console.log(textArray);
    const filteredData = nameStickerData.data.filter((point, index) => {
      const address = point.map.jibunAddress;
      // 네임스티커 데이터에 지번주소가 없을 경우
      if (
        address &&
        district === "전체" &&
        textArray.every(text => address.includes(text))
      ) {
        point.id = index;
        return point;
      } else if (
        address &&
        address.includes(district) &&
        textArray.every(text => address.includes(text))
      ) {
        point.id = index;
        return point;
      }
    });
    // 필터링 된 데이터 지점이 0보다 크면, 배열의 첫 번째 장소로 지도를 이동
    if (filteredData.length > 0) {
      this.movePosition(filteredData[0].id);
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
    const value = {
      drawMap: this.drawMap,
      movePosition: this.movePosition,
      getLocation: this.getLocation,
      onSearchFilter: this.onSearchFilter,
      filteredData: this.state.filteredData,
      changeUrl: this.changeUrl
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { MapProvider, Consumer as MapConsumer };
