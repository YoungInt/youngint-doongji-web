import React from "react";
import mainHappy from "../images/main_happy";
import happyUsage1 from "../images/happname_usage_1";
import happyCulture1 from "../images/happyname_culture_01";
import happyCulture2 from "../images/happyname_culture_02";
import happyCulture3 from "../images/happyname_culture_03";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Slide from "../components/Slide";
import homeLogo from "../images/button_home.svg";
import languageLogo from "../images/button_language.svg";
import { happyText } from "../API/textAPI";
import Text from "../components/Text";

export default class HappyPage extends React.Component {
  state = {
    activeId: 0
  };
  happyImages = [
    happyUsage1,
    "https://images.unsplash.com/photo-1544555103-3fc48768dcf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  ];
  cultureImages = [happyCulture1, happyCulture2, happyCulture3];
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { activeId } = this.state;
    const defaultLang = "ko";
    const text = happyText[defaultLang];
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>해피 네임스티커</title>
        </Helmet>
        <div className="happy">
          {/*헤더  */}
          <div className="header-wrap">
            <div className="wrap">
              <header className="header">
                <nav className="nav">
                  <div className="home">
                    <Link to="/">
                      <img src={homeLogo} alt="" />
                    </Link>
                  </div>
                  <div className="lang">
                    <img src={languageLogo} alt="" />
                  </div>
                </nav>
              </header>
            </div>
          </div>
          {/* 메인 */}

          <main className="main-wrap">
            <div className="main">
              <div className="main__content">
                <div className="happy_main-img">
                  <img src={mainHappy} alt="해피 네임" />
                </div>

                <Text text={text.main} />
                <div className="img">
                  <img src="#" alt="네임 스티커" />
                </div>
              </div>
            </div>
          </main>
          {/* 컬쳐 */}
          <section className="culture-wrap">
            <div className="culture">
              <div className="top">
                <div className="text">
                  <Text title={"title"} text={text.cultureTitle} />

                  <Text title={"desc"} text={text.cultureDesc} />
                </div>
              </div>
              <div className="middle">
                <Slide images={this.happyImages} slideName={"happy"} />
              </div>
              <div className="bottom">
                {text.culture.map((text, index) => (
                  <div className="item">
                    <div className="img">
                      <img src={this.cultureImages[index]} alt="" />
                    </div>
                    <Text title={"text"} text={text} />
                  </div>
                ))}
              </div>
              {/* 슬라이드 */}
            </div>
          </section>
          {/* 버전 */}
          <section className="version-wrap">
            <div className="version">
              <div className="version__title">
                <Text text={text.versionTitle} title={"title"} />
                <ul className="list">
                  {text.version.map(text => (
                    <li>
                      <div className="img">
                        <img src="" alt="" />
                      </div>

                      <Text text={text} title="title" />
                    </li>
                  ))}
                </ul>
              </div>
              {/* 버전 상세 */}
              <div className="version__detail">
                <div className="detail">
                  <div className="detail-wrap">
                    <div className="img">
                      <img src="#" alt="아이콘을 선택하는 이미지" />
                    </div>
                    <div className="text">
                      <p>
                        <span className="bold">글꼴 선택이 가능</span>
                        합니다.
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
                {text.featureTitle.map((t, index) => (
                  <div className="detail">
                    <div className="detail-wrap">
                      <div className="img">
                        <img src="#" alt="" />
                      </div>
                      <div className="text">
                        <Text text={t} />
                        <Text text={text.featureDesc[index]} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* 해피네임 비전 */}
          <section className="vision-wrap">
            <div className="vision">
              <div className="img">
                <img src="#" alt="해피네임 이미지" />
              </div>
              <div className="text-wrap">
                <div className="text">
                  <Text text={text.messageTitle} />
                  <Text text={text.messageDesc} />
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
