import React from "react";
import mainHappy from "../images/main_happy";
import happy from "../images/happy";
import happyCulture1 from "../images/happyname_culture_01";
import happyCulture2 from "../images/happyname_culture_02";
import happyCulture3 from "../images/happyname_culture_03";
import { Link } from "react-router-dom";

export default class HappyPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="happy">
          {/*헤더  */}
          <div className="header-wrap">
            <header className="header">
              <nav className="nav">
                <div className="home">
                  <Link to="/">홈</Link>
                </div>
                <div className="lang">지구</div>
              </nav>
            </header>
          </div>
          {/* 메인 */}

          <section className="main-wrap">
            <div className="main">
              <div className="main__content">
                <div className="img">
                  <img src={mainHappy} alt="해피 네임" />
                </div>
                <p>
                  누구나 부담없이 만들 수 있는
                  <span className="bold">나만의 네임스티커</span>
                </p>
                <div className="img">
                  <img src="#" alt="네임 스티커" />
                </div>
              </div>
            </div>
          </section>
          {/* 컬쳐 */}
          <section className="culture-wrap">
            <div className="culture">
              <div className="top">
                <div className="img">
                  <img src={happy} alt="" />
                </div>
                <div className="text">
                  <div className="title">
                    <p>해피네임스티커의</p>
                    <p>새로운 문화</p>
                  </div>
                  <div className="desc">
                    <p>
                      해피네임스티커는 고객의 취향과 필요에 따라 네임스티커로의
                      용도만이 아닌
                    </p>
                    <p>
                      친구와 연인간의 기록의 용도와 재미있는 놀이문화로도 자리
                      잡았습니다.
                    </p>
                    <p>
                      친구와 연인과 네임스티커를 교환하고, 의미있는 곳에 붙여
                      기록하는 용도로도 사용되고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="middle">
                <div className="item">
                  <div className="img">
                    <img src={happyCulture1} alt="" />
                  </div>
                  <div className="text">
                    소중한 <br /> 나의 물건에 <br />
                    표시해요
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src={happyCulture2} alt="" />
                  </div>
                  <div className="text">
                    친구와
                    <br />
                    네임스티커
                    <br />
                    교환해요
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src={happyCulture3} alt="" />
                  </div>
                  <div className="text">
                    연인과의
                    <br />
                    사랑을
                    <br /> 기록해요
                  </div>
                </div>
              </div>
              <div className="bottom">슬라이드</div>
            </div>
          </section>
          {/* 버전 */}
          <section className="version-wrap">
            <div className="version">
              <p className="version__title">
                해피네임스티커 자판기는 <br />
                <span className="bold">3가지 버전</span>이 있어
                <br />
                상황에 맞는 대응이 가능합니다. 해피네임스티커 자판기는
              </p>
              <ul className="version__list">
                <li>
                  <div className="img">
                    <img src="" alt="" />
                    <div className="title">
                      <p>
                        인쇄하고 싶은
                        <br />
                        아이콘을
                        <br />
                        선택할 수 있는
                        <span className="bold">해피 ver.</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="" alt="" />
                    <div className="title">
                      <p>
                        눈에 띄는
                        <br />
                        귀여운
                        <br />
                        캐릭터 디자인
                        <span className="bold">캐릭터 ver.</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="" alt="" />
                    <div className="title">
                      <p>
                        협력제휴사의
                        <br />
                        요청에 맞는
                        <br />
                        디자인을 적용
                        <span className="bold">커스텀 ver.</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* 버전 상세 */}
            <div className="version__desc">
              <div className="version__desc1">
                <div className="img">
                  <img src="#" alt="아이콘을 선택하는 이미지" />
                  <div className="text">
                    <p>
                      <span className="bold">글꼴 선택이 가능</span>합니다.
                    </p>
                    <p>
                      여러번의 테스트를 거쳐 사용자가 글꼴을 편집할 수 있도록
                      적용했습니다.
                      <br />
                      해피버전 UI내에서 네가지 글꼴 중 원하는 글꼴로 선택이
                      가능합니다.
                      <br />
                      소비자와 제휴사의 의견을 적극 반영하여 업데이트 적용한
                      부분입니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="version__desc2">
                <div className="img">
                  <img src="" alt="다양한 캐릭터" />
                  <div className="text">
                    <p>
                      고객이 인쇄하고 싶은 <br />
                      <span className="bold">모티브를 선택</span>할 수 있습니다.
                    </p>
                    <p>
                      고객이 직접 원하는 모티브 디자인을 선택할 수 있는 기능으로
                      <br />
                      타사와 가장 대비되는 해피네임스티커의 강점입니다.
                      <br />
                      모티브는 주기적으로 새로운 디자인으로 업데이트되고 있으며,
                      <br />
                      제휴를 맺은 캐릭터사의 디자인도 개발하여 출시하고
                      있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="version__desc3">
                <div className="img">
                  <img src="#" alt="스티커" />
                  <div className="text">
                    <p>
                      <span className="bold">우수한 스티커 품질</span>
                    </p>
                    <p>
                      해피네임 스티커의 인쇄 부분은 여러번 지워도 잘 지워지지
                      않습니다.
                      <br />
                      또한 최고급 품질의 라미네이팅 코팅으로 내구성이 매우
                      우수하며,
                      <br />
                      열에 견디는 정도와 접착력 또한 여러번의 테스트를 통해
                      검증되었습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="version__desc4">
                <div className="img">
                  <img src="" alt="다양한 디자인" />
                  <div className="text">
                    <p>
                      <span className="bold">다양한 형태의 디자인 시도</span>
                    </p>
                    <p>
                      해피네임스티커는 디즈니코리아, 산리오코리아, 아이코닉스
                      핑크퐁 등<br />
                      여러 캐릭터사의 캐릭터를 적용한 디자인을 출시하고 있으며,
                      <br />
                      네임스티커가 더 폭넓은 용도로 사용될 수 있도록,
                      <br />
                      새롭고 다양한 칼선을 적용한 스티커를 개발하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 해피네임 비전 */}
          <section className="vision">
            <div className="img">
              <img src="#" alt="해피네임 이미지" />
              <div className="text">
                <p>
                  <span className="bold">
                    더 좋은 제품으로
                    <br />더 넓은 곳으로
                  </span>
                  <p>
                    해피네임 스티커는 더 넓은 세계로 나가 더 많은 고객들을
                    만나고,
                    <br />
                    고객의 소리에 귀 기울여 더 좋은 제품을 개발할 것을 약속
                    드립니다.
                  </p>
                </p>
              </div>
            </div>
          </section>
          {/* 푸터 컴포넌트 */}
        </div>
      </React.Fragment>
    );
  }
}
