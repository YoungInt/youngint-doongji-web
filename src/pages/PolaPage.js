import React from "react";

export default class PolaPage extends React.Component {
  render() {
    return (
      <div className="pola">
        {/* 폴라 헤더 */}
        <div className="header-wrap">
          <header className="header">
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>지구</li>
            </ul>
          </header>
        </div>
        {/* 폴라  */}
        <div className="main-wrap">
          <div className="main">
            <p>POLAROID STICKER DELIVERY</p>
            <p>POLAPOLAR</p>
          </div>
        </div>
        <div className="intro-wrap">
          <div className="intro">
            <p>
              폴라로이드 스티커 배달부,
              <br />
              <span className="bold">폴라폴라</span>입니다.
              <br />
              소중한 추억을 배달해드려요.
            </p>
          </div>
        </div>
        div.
      </div>
    );
  }
}
