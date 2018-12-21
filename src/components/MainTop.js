import React from "react";
import { Link } from "react-router-dom";
import { mainText } from "../API/textAPI";
import languageIcon from "../images/button_language.svg";
import Text from "../components/Text";

export default class MainHeader extends React.Component {
  render() {
    const defaultLang = "ko";
    const text = mainText[defaultLang];
    return (
      <React.Fragment>
        <div className="mainTop">
          <div className="box" />
          <div className="header-wrap">
            <header className="header">
              <div className="log">logo-img</div>
              <nav className="menu">
                <ul>
                  <li>
                    <a href="/#philosophy">About</a>
                  </li>
                  <li>
                    <a href="/#brand">Brand</a>
                  </li>
                  <li>
                    <a href="/#contact">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={languageIcon} alt="언어 설정 버튼" />
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
          <div className="mainTop__img">
            <div className="content">
              <div className="content-wrap">
                <div className="title">
                  {/* <p>
                    사람에게 집중한 <br />
                    익숙하지만 '새로운' <br />
                    키오스크 서비스
                  </p> */}
                  <Text text={text.t1} />
                </div>
                <div className="desc">
                  {/* <p>
                    영인터내셔널은 고객의 아이덴티티를 만들어주는 <br />
                    키오스크 (무인 자동화 판매기) 개발/유통 회사입니다. <br />
                    고객들이 키오스크를 사용함에 있어 더 나은 사용환경과 <br />
                    경험을 제공하는 것에 집중하고 있습니다.
                  </p> */}
                  <Text text={text.p1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="wrap">
            <div className="content">
              {/* <p>
                세계로 나아가는 <br />
                글로벌 기업
              </p> */}
              {/* <p>
                영인터내셔널은 해외 고객사와도 함께합니다.
                <br />
                싱가폴, 말레이시아, 인도네시아, 일본, 캐나다,
                <br />
                대만, 남아프리카공화국 등에 진출해 있습니다.
              </p> */}
              <Text text={text.t2} />
              <Text text={text.p2} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
