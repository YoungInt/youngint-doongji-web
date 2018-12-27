import React from "react";
import { Helmet } from "react-helmet";
import Slide from "../components/Slide";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import titleNavy from "../images/00_title_navy";
import titleSub from "../images/00_title_sub";
import polaDeliver from "../images/10_pola_deliver.gif";
import polapolar_keyword_1 from "../images/polapolar_keyword_1";
import polapolar_keyword_2 from "../images/polapolar_keyword_2";
import polapolar_arm from "../images/polapolar_selectyourpic_arm";
import homeLogo from "../images/button_home.svg";
import langLogo from "../images/button_language.svg";
import Text from "../components/Text";
import { polaText } from "../API/textAPI";

import classnames from "classnames";
import { polabenefits, pola_chat, pola_usage } from "../API/imageAPI";
import pola_hi from "../images/polapolar_hi ";
import language_bubble from "../images/common_language_bubble";
import pola_profilepic from "../images/polapolar_profilepic";
export default class PolaPage extends React.Component {
  state = {
    activeId: 0,
    keyword: false
  };
  someRefName = React.createRef();

  onImageChange = id => {
    this.setState({
      activeId: id
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    const height = this.divElement.scrollHeight;
    console.log("height" + height);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = e => {
    window.scrollY > 1400 &&
      !this.state.keyword &&
      this.setState({
        keyword: true
      });
  };
  render() {
    const { lang, onChangeLang } = this.props.value;
    const text = polaText[lang];
    const { mobile } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <title>폴라폴라 포토자판기</title>
        </Helmet>
        <div className="pola" ref={this.someRefName}>
          {/* 폴라 헤더 */}
          <div className="header-wrap">
            <header className="header">
              <ul>
                <li>
                  <Link to="/">
                    <img src={homeLogo} alt="" />
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <div className="language-icon">
                      <div className="lang pola">
                        <div className="text">
                          {lang === "ko" ? "KOR" : "EN"}
                        </div>
                        <img
                          className="lang-img"
                          src={language_bubble}
                          alt=""
                        />
                      </div>
                      <div className="img">
                        <img className="img" src={langLogo} alt="" />
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </header>
          </div>
          {/* 폴라  */}
          <div className="main-wrap">
            <div className="main">
              <img className="top" src={titleSub} alt="" />
              <img className="bottom" src={titleNavy} alt="" />
            </div>
            <img className="pola" src={polaDeliver} alt="" />
          </div>
          <section className="intro-wrap">
            <div className="intro">
              <div className="text">
                <Text text={text.main} />
              </div>
              <div className="img-wrap">
                <div className="img">
                  <img src={pola_hi} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section
            className="use-wrap"
            ref={divElement => (this.divElement = divElement)}
          >
            <div className="use">
              <ul>
                {text.use.map((t, index) => (
                  <li key={index}>
                    {index !== 2 ? (
                      <div className={classnames("img", `use-${index}`)}>
                        {index !== 0 ? (
                          <img
                            className={`use-${index}`}
                            src={pola_chat[index]}
                            alt="#"
                          />
                        ) : (
                          <div
                            className={classnames("keyword", {
                              active: this.state.keyword
                            })}
                          >
                            <img
                              className={classnames("keyword-1", {
                                active: this.state.keyword
                              })}
                              src={polapolar_keyword_1}
                              alt=""
                            />
                            <img
                              className={classnames("keyword-2", {
                                active: this.state.keyword
                              })}
                              src={polapolar_keyword_2}
                              alt=""
                            />
                          </div>
                        )}
                        {index === 1 ? (
                          <div className="pola-arm">
                            <img src={polapolar_arm} alt="" className="arm" />
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <div className="use-2">
                        <div className="use-2__text">짜자잔 -</div>
                        <div className="use-2__img">
                          <img src={pola_chat[index]} alt="" />
                        </div>
                      </div>
                    )}
                    <div className="text">
                      <Text text={t} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="feature-wrap">
            <div className="feature">
              <div className="img">
                <img src={pola_profilepic} alt="" />
              </div>
              <div className="detail-wrap">
                {[0, 2].map((f, index) => (
                  <div className="detail-line" key={index}>
                    <div className="item-wrap">
                      <div className={`item item-${f}`}>
                        <div className="img">
                          <img src={polabenefits[f]} alt="" />
                        </div>
                        <div className="title">
                          <Text text={text.featureTitle[f]} />
                        </div>

                        <Text text={text.featureDesc[f]} />
                      </div>
                    </div>
                    <div className="item-wrap">
                      <div className={`item item-${f + 1}`}>
                        <div className="img">
                          <img src={polabenefits[f + 1]} alt="" />
                        </div>
                        <div className="title">
                          <Text text={text.featureTitle[f + 1]} />
                        </div>
                        <Text text={text.featureDesc[f + 1]} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="pola-slide">
            <div className="text">
              <Text text={text.slideMessage[this.state.activeId]} />
            </div>
            <div className="img">
              {/* 폴라 슬라이드 */}

              <Slide
                images={pola_usage}
                slideName={"pola"}
                handleImageChange={this.onImageChange}
              />
            </div>
          </section>
          <section className="message">
            <Text text={text.message} />
          </section>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
