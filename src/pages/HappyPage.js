import React from "react";
import mainHappy from "../images/main_happy";
import happyUsage1 from "../images/happname_usage_1";
import happyUsage2 from "../images/happname_usage_2";
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
    happyUsage2,
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  ];
  cultureImages = [happyCulture1, happyCulture2, happyCulture3];
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { activeId } = this.state;
    const { lang, onChangeLang } = this.props.value;
    const text = happyText[lang];
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
                  <div key={index} className="item">
                    <div className="img">
                      <img src={this.cultureImages[index]} alt="" />
                    </div>
                    <Text title={"text"} text={text} />
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* 버전 */}
          <section className="version-wrap">
            <div className="version">
              <div className="version__title">
                <Text text={text.versionTitle} title="title" />

                <ul className="list">
                  {text.version.map((text, index) => (
                    <li key={index}>
                      <div className="img">
                        <img src="" alt="" />
                      </div>
                      <div className="title">
                        <Text text={text} title="title" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 버전 상세 */}
              <div className="version__detail">
                {text.featureTitle.map((t, index) => (
                  <div key={index} className="detail">
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
