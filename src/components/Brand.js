import React from "react";
import happy from "../images/main_happy";
import pola from "../images/main_polapolar";
import { Link } from "react-router-dom";
import Text from "../components/Text";
import { mainText } from "../API/textAPI";

export default class Brand extends React.Component {
  render() {
    const defaultLang = "ko";
    const text = mainText[defaultLang];
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
                      <h3 className="bold">
                        {/* 해피네임스티커 */}
                        <Text text={text.t8[0]} />
                      </h3>
                      <h3>HAPPYNAME</h3>
                    </div>
                    {/* <p>
                      행복한 사진배달부 폴라폴라의 폴라로이드 사진 스티커 자판기
                    </p> */}
                    <Text text={text.p8[0]} />
                    <Link to="/happy">
                      <div className="button">자세히 보기 ></div>
                    </Link>
                  </div>
                </div>
                <div className="brand-box pola">
                  <div className="container-title" />
                  <div className="img">
                    <img className="pola-img" src={pola} alt="" />
                  </div>

                  <div className="content pola">
                    <div className="title">
                      <h3 className="bold">
                        {/* 폴라폴라 */}
                        <Text text={text.t8[1]} />
                      </h3>
                      <h3>POLAPOLAR</h3>
                    </div>
                    {/* <p>
                      남녀노소 나이불문 쉽게 사용할 수 있는 네임스티커 자판기
                    </p> */}
                    <Text text={text.p8[1]} />

                    <Link to="/pola">
                      <div className="button">
                        {/* 자세히보기 > */}
                        <Text text={text.button8} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
