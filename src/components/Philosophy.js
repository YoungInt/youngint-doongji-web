import React from "react";
import Text from "../components/Text";
import { mainText } from "../API/textAPI";

export default class Philosophy extends React.Component {
  render() {
    const defaultLang = "ko";
    const text = mainText[defaultLang];
    return (
      <React.Fragment>
        <div className="philosophy">
          <div className="philosophy__wrap">
            <h2 className="title">PHILOSOPHY</h2>
            <div className="content">
              <div className="content__keyword">
                <div className="wrap">
                  {/* <div className="keyword">
                    <div className="text">
                      <p>
                        NEW
                        <br /> VALUE
                      </p>
                      <p />
                      <p>
                        새로운 가치를
                        <br /> 만듭니다
                      </p>
                    </div>
                  </div>
                  <div className="keyword">
                    <div className="text">
                      <p>
                        GROW <br />
                        TOGETHER
                      </p>
                      <p />
                      <p>
                        함께 일하고 <br /> 함께 성장합니다.
                      </p>
                    </div>
                  </div>
                  <div className="keyword">
                    <div className="text">
                      <p>
                        RIGHT
                        <br /> DIRECTION
                      </p>
                      <p />
                      <p>
                        올바른 길이라면 <br />
                        힘들어도 나아갑니다.
                      </p>
                    </div>
                  </div> */}
                  {text.p3.map((t, index) => (
                    <div className="keyword">
                      <div className="text">
                        <Text text={text.t3[index]} />
                        <p />
                        <Text text={t} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="content__desc">
                <div className="wrap">
                  <div className="img">
                    <img
                      src="https://images.unsplash.com/photo-1544273677-c433136021d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <div className="title">
                      {/* <p>
                        우리는 키오스크를 통한 <br />
                        <span className="bold">새로운 문화를 탐구</span>
                        합니다.
                      </p> */}
                      <Text text={text.t4} />
                    </div>
                    <div className="desc">
                      {/* <p>
                        무인 자판기 시장은 오래 되었지만 그동안 큰 변화가
                        없었습니다.
                        <br />
                        우리는 이 시장에서 통용되는 틀을 넘어, <br />
                        고객들의 숨은 니즈를 찾고 솔루션을 찾고자 합니다. <br />
                        키오스크의 장점을 '무인'과 '자동화'에만 초점을 두지
                        않고, <br />
                        키오스크를 통한 새로운 문화를 만들어 가고자 합니다.
                      </p> */}
                      <Text text={text.p5} />
                    </div>
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
                {/* <p>
                  네임스티커 자판기 개발
                  <span className="bold">국내 최초</span>
                  <br />
                  카카오톡 & 키오스크 연동
                  <span className="bold">국내최초</span>
                  <br />
                  누적 매출
                  <span className="bold">70억원</span>
                  <br />
                  국내 누적 사용자
                  <span className="bold">300만명</span>
                  <br />
                  누적 설치대수
                  <span className="bold">1000대</span>
                  <br />
                </p> */}
                <Text text={text.t6} />
              </div>
              <div className="date">
                {/* 2018년 10월 기준 */}
                <Text text={text.p6} />
              </div>
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
