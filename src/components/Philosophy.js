import React from "react";

export default class Philosophy extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="philosophy">
          <div className="philosophy__wrap">
            <div className="title">PHILOSOPHY</div>
            <div className="content">
              <div className="content__keyword">
                <div className="wrap">
                  <div className="keyword-1">Custom</div>
                  <div className="keyword-2">Easy</div>
                  <div className="keyword-3">Fun</div>
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
                      <p>우리는 키오스크를 통한</p>

                      <div>
                        <p>새로운 문화를 탐구</p>
                        합니다.
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        무인 자판기 시장은 오래 되었지만 그동안 큰 변화가
                        없었습니다.
                      </p>
                      <p>우리는 이 시장에서 통용되는 틀을 넘어,</p>
                      <p>고객들의 숨은 니즈를 찾고 솔루션을 찾고자 합니다.</p>
                      <p>
                        키오스크의 장점을 '무인'과 '자동화'에만 초점을 두지
                        않고,
                      </p>
                      <p>키오스크를 통한 새로운 문화를 만들어 가고자 합니다.</p>
                    </div>
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
