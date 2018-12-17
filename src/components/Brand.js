import React from "react";
import happy from "../images/main_happy";
import pola from "../images/main_polapolar";
import { Link } from "react-router-dom";

export default class Brand extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="brand-container ">
          <div className="brand-wrap">
            <div className="brand happy" />
            <div className="brand pola" />
            <div className="box">
              <div className="center">
                <div className="brand-box happy">
                  <div className="container-title">
                    <h2 className="title">OUR BRAND</h2>
                  </div>
                  <div className="img">
                    <img className="happy-img" src={happy} alt="" />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h3 className="bold">해피네임스티커</h3>
                      <h3>HAPPYNAME</h3>
                    </div>
                    <p>
                      행복한 사진배달부 폴라폴라의 폴라로이드 사진 스티커 자판기
                    </p>
                    <Link to="/pola">
                      <div className="button">자세히보기 ></div>
                    </Link>
                  </div>
                </div>
                <div className="brand-box pola">
                  <div className="container-title" />
                  <div className="img">
                    <img className="happy-img" src={pola} alt="" />
                  </div>

                  <div className="content pola">
                    <div className="title">
                      <h3 className="bold">폴라폴라</h3>
                      <h3>POLAPOLAR</h3>
                    </div>
                    <p>
                      남녀노소 나이불문 쉽게 사용할 수 있는 네임스티커 자판기
                    </p>

                    <Link to="/happy">
                      <div className="button">자세히 보기 ></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accomplish">
          <div className="wrap">
            <div className="content-text">
              <div className="text">
                <div className="p">
                  네임스티커 자판기 개발
                  <p className="bold">국내 최초</p>
                </div>
                <div className="p">
                  카카오톡 & 키오스크 연동
                  <p className="bold">국내최초</p>
                </div>
                <div className="p">
                  누적 매출
                  <p className="bold">70억원</p>
                </div>
                <div className="p">
                  국내 누적 사용자
                  <p className="bold">300만명</p>
                </div>
                <div className="p">
                  누적 설치대수
                  <p className="bold">1000대</p>
                </div>
              </div>
              <div className="date">2018년 10월 기준</div>
            </div>
            <div className="content-img">
              <img src="#" alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
