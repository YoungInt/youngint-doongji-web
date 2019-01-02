import React from "react";
import Text from "../components/Text";
import { browser } from "react-router-dom";
import classnames from "classnames";
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
              <div
                className={classnames("title", {
                  en: this.props.lang === "en"
                })}
              >
                <Text title="main" text={text.contactTitle1} />
                {text.contactTitle2 ? (
                  <Text title="sub" text={text.contactTitle2} />
                ) : null}
              </div>
              <address className="address">
                <p>
                  <span className="bold">{text.contact.company}</span>
                  <br />
                  {text.contact.address} <br />
                  {text.contact.address2 ? (
                    <span>
                      {text.contact.address2} <br />
                    </span>
                  ) : null}
                  <a href={`tel:${text.contact.tel}`}>{text.contact.tel}</a>{" "}
                  {text.contact.cs}:
                  <a href={`tel:${text.contact.cstel}`}>{text.contact.cstel}</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
