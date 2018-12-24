import React from "react";
import { Helmet } from "react-helmet";
import Slide from "../components/Slide";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import titleNavy from "../images/00_title_navy";
import titleSub from "../images/00_title_sub";
import polaDeliver from "../images/10_pola_deliver.gif";
import polabenefit1 from "../images/polapolar_benefit_01";
import polabenefit2 from "../images/polapolar_benefit_02";
import polabenefit3 from "../images/polapolar_benefit_03";
import polabenefit4 from "../images/polapolar_benefit_04";
import polapolar_keyword_0 from "../images/polapolar_keyword_0";
import polapolar_keyword_1 from "../images/polapolar_keyword_1";
import polapolar_keyword_2 from "../images/polapolar_keyword_2";
import polapolar_selectyourpic from "../images/polapolar_selectyourpic";
import polapolar_arm from "../images/polapolar_selectyourpic_arm";
import homeLogo from "../images/button_home.svg";
import langLogo from "../images/button_language.svg";
import Text from "../components/Text";
import { polaText } from "../API/textAPI";
import classnames from "classnames";
export default class PolaPage extends React.Component {
  state = {
    activeId: 0,
    keyword: false
  };
  someRefName = React.createRef();
  polaImages = [
    "https://images.unsplash.com/photo-1544586571-42a0e47dad19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1544555103-3fc48768dcf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  ];
  polabenefit = [polabenefit1, polabenefit2, polabenefit3, polabenefit4];
  polause = [polapolar_keyword_0, polapolar_selectyourpic];
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
    console.log(window.scrollY);
  };
  render() {
    const defaultLang = "ko";
    const text = polaText[defaultLang];
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
                    <img src={langLogo} alt="" />
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
                    <div className={classnames("img", `use-${index}`)}>
                      {index !== 0 ? (
                        <img
                          className={`use-${index}`}
                          src={this.polause[index]}
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
                        <img src={polapolar_arm} alt="" className="arm" />
                      ) : null}
                    </div>
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
                <img src="#" alt="" />
              </div>

              <div className="detail-wrap">
                {[0, 2].map((f, index) => (
                  <div className="detail-line" key={index}>
                    <div className="item-wrap">
                      <div className="item">
                        <div className="img">
                          <img src={this.polabenefit[f]} alt="" />
                        </div>
                        <div className="title">
                          <Text text={text.featureTitle[f]} />
                        </div>

                        <Text text={text.featureDesc[f]} />
                      </div>
                    </div>
                    <div className="item-wrap">
                      <div className="item">
                        <div className="img">
                          <img src={this.polabenefit[f + 1]} alt="" />
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
          <section className="message">
            <div className="text">
              <Text text={text.message[this.state.activeId]} />
            </div>
            <div className="img">
              {/* 폴라 슬라이드 */}

              <Slide
                images={this.polaImages}
                slideName={"pola"}
                handleImageChange={this.onImageChange}
              />
            </div>
          </section>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
