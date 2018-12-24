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
import polaChat from "../images/polapolar_keyword ";
import homeLogo from "../images/button_home.svg";
import langLogo from "../images/button_language.svg";
import Text from "../components/Text";
import { polaText } from "../API/textAPI";

export default class PolaPage extends React.Component {
  state = {
    activeId: 0
  };
  polaImages = [
    "https://images.unsplash.com/photo-1544586571-42a0e47dad19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1544555103-3fc48768dcf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  ];
  polabenefit = [polabenefit1, polabenefit2, polabenefit3, polabenefit4];

  onImageChange = id => {
    this.setState({
      activeId: id
    });
    console.log(id);
  };

  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const defaultLang = "ko";
    const text = polaText[defaultLang];
    return (
      <React.Fragment>
        <Helmet>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <title>폴라폴라 포토자판기</title>
        </Helmet>
        <div className="pola">
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
          <section className="use-wrap">
            <div className="use">
              <ul>
                {text.use.map((t, index) => (
                  <li key={index}>
                    <div className="img">
                      <img src="#" alt="#" />
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
