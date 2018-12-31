import React from "react";
import Text from "../components/Text";
import { browser } from "react-router-dom";
export default class Contact extends React.Component {
  componentDidMount() {
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new daum.maps.LatLng(37.277493, 127.105616), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new daum.maps.Map(mapContainer, mapOption);
    const markerPosition = new daum.maps.LatLng(37.277493, 127.105616);

    // 마커를 생성합니다
    const marker = new daum.maps.Marker({
      position: markerPosition
    });
    daum.maps.event.addListener(marker, "click", function() {
      location.href = "https://place.map.daum.net/1927481863";
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }
  render() {
    const { text } = this.props;

    return (
      <div className="contact">
        <div className="wrap">
          <h2 className="component-title">CONTACT US</h2>
          <div className="content">
            <a href="https://place.map.daum.net/1927481863">
              <div
                id="map"
                style={{ width: "580px", height: "382px" }}
                className="content__map"
              />
            </a>
            <div className="content__text">
              <div className="title">
                {/* 영인터내셔널은 <br />
                입점제안 및 제휴문의를 <br />
                기다리고 있습니다. */}
                <Text text={text.contactTitle} />
              </div>
              <address className="address">
                <p>
                  <span className="bold">(주)영인터내셔널</span>
                  <br />
                  (16967)경기도 용인시 기흥구 신갈로 121 영인터내셔널 <br />
                  <a href="tel:031-123-4567">031-123-4567</a> 고객센터:
                  <a href="tel:070-123-4567">070-123-4567</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
