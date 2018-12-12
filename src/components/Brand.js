import React from "react";

export default class Brand extends React.Component {
  render() {
    return (
      <div className="brand-container ">
        <div className="brand happy">
          <div className="wrap">
            <div className="container-title">
              <div className="title">OUR BRAND</div>
            </div>

            <div className="content">
              <div className="title">
                <p>해피네임 스티커</p>
                <p>HAPPYNAME</p>
              </div>
              <p>남녀노소 나이불문 쉽게 사용할 수 있는 네임스티커 자판기</p>
              <div className="button">자세히 보기 ></div>
            </div>
          </div>
        </div>
        <div className="brand pola">
          <div className="wrap pola">
            <div className="container-title" />
            <div className="content">
              <div className="title">
                <p>폴라폴라</p>
                <p>POLAPOLAR</p>
              </div>
              <p>행복한 사진배달부 폴라폴라의 폴라로이드 사진 스티커 자판기</p>
              <div className="button">자세히보기 ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
