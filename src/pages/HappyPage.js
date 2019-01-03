import React from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Slide from "../components/Slide";
import { happyText } from "../API/textAPI";
import Text from "../components/Text";
import Header from "../components/Header";
import {
  happy_usage,
  happy_culture,
  happy_motif01,
  happy_motif02,
  designcut,
  happy_version,
  happyname_main,
  drops
} from "../API/imageAPI";
import drop from "../images/happyname_drop";
import happy_bubble from "../images/happyname_ver_happy_bubble";
import classnames from "classnames";
import eraser from "../images/eraser";
import motifcheck from "../images/happyname_motifcheck";

export default class HappyPage extends React.Component {
  state = {
    activeId: 0,
    activeFont: 1,
    activeMotif: 0,
    index: 0,
    dropAnimation: false
  };
  motifOrder = [0, 3, 5, 2, 1, 7, 4, 6];
  componentDidMount() {
    window.scroll(0, 0);
    this.fontIdChangeInterval = setInterval(() => {
      const yOffset = window.pageYOffset;
      yOffset >= 5200 &&
        !this.state.dropAnimation &&
        this.setState({
          dropAnimation: true
        });

      const { activeFont, activeMotif, index } = this.state;
      const activeId = activeFont < 4 ? activeFont + 1 : 1;
      const id = index < 7 ? index + 1 : 0;
      this.setState({
        activeFont: activeId,
        activeMotif: this.motifOrder[id],
        index: id
      });
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.fontIdChangeInterval);
  }

  render() {
    const { lang, onChangeLang } = this.props.value;
    const { activeFont, activeMotif } = this.state;
    const text = happyText[lang];
    const { mobile } = this.props;
    const motifs = [...happy_motif01, ...happy_motif02];
    return (
      <React.Fragment>
        <Helmet>
          <title>해피 네임스티커</title>
        </Helmet>
        <div className="happy">
          {/*헤더  */}

          <Header classname="brand" brand="happy" />
          {/* 메인 */}

          <main className="main-wrap">
            <div className="main">
              <div className="main__content">
                <Text text={text.main} />
                <div className="img">
                  {happyname_main.map((happy, index) => (
                    <div key={index} className="container">
                      <div key={index} className="img-box">
                        <img className={`happy-${index}`} src={happy} />
                      </div>
                    </div>
                  ))}
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
                <Slide images={happy_usage} slideName={"happy"} />
              </div>
              <div className="bottom">
                {text.culture.map((text, index) => (
                  <div key={index} className="item">
                    <div className="img">
                      <img src={happy_culture[index]} alt="" />
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
                  {text.version.map((t, index) => (
                    <li key={index}>
                      <div className="img">
                        {index === 0 ? (
                          <div className="bubble__text">
                            <img className="bubble" src={happy_bubble} />
                            <Text text={text.bubble} />
                          </div>
                        ) : null}
                        <img
                          src={happy_version[index]}
                          className={`version-${index}`}
                          alt=""
                        />
                      </div>
                      <div className="title">
                        <Text text={t} title="title" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="location">
                구몬, 대구 박물관, 전주 박물관, 세노비스, 한수원,
                유니버셜스튜디오
              </div> */}
              {/* 버전 상세 */}
              <div className="version__detail">
                {/* 글꼴선택 */}
                <div className="detail">
                  <div className="detail-wrap">
                    <div className="img img-1">
                      <div className="fontSelect">
                        <div className={classnames("namesticker")}>
                          <div className={`text font-${activeFont}`}>
                            김해피
                          </div>
                        </div>
                        <div className="number-box">
                          <div className="box-wrap">
                            <div
                              className={classnames("box", {
                                active: activeFont === 1
                              })}
                            >
                              <div className="text">1</div>
                            </div>
                            <div
                              className={classnames("box", {
                                active: activeFont === 2
                              })}
                            >
                              <div className="text">2</div>
                            </div>
                          </div>
                          <div className="box-wrap">
                            <div
                              className={classnames("box", {
                                active: activeFont === 3
                              })}
                            >
                              <div className="text">3</div>
                            </div>
                            <div
                              className={classnames("box", {
                                active: activeFont === 4
                              })}
                            >
                              <div className="text">4</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text">
                      <Text text={text.featureTitle[0]} />
                      <Text text={text.featureDesc[0]} />
                    </div>
                  </div>
                </div>
                {/* 그림 선택 */}
                <div className="detail">
                  <div className="detail-wrap">
                    <div className="img img-2">
                      <div className="box">
                        <div className="selected">
                          <div className="img">
                            <img src={motifs[activeMotif]} alt="" />
                          </div>
                        </div>
                        <div className="motif">
                          <div className="motif-pic">
                            <div className="motif-wrap">
                              {happy_motif01.map((motif, index) => (
                                <div
                                  key={index}
                                  className={classnames("motif__img", {
                                    active: activeMotif === index
                                  })}
                                >
                                  <img
                                    className="motif-img"
                                    key={index}
                                    src={motif}
                                  />
                                  <div className="motif-check">
                                    <img
                                      className="check-img"
                                      src={motifcheck}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="motif-wrap">
                              {happy_motif02.map((motif, index) => (
                                <div
                                  key={index}
                                  className={classnames("motif__img", {
                                    active: activeMotif === index + 4
                                  })}
                                >
                                  <img
                                    className="motif-img"
                                    key={index}
                                    src={motif}
                                  />
                                  <img
                                    className="motif-check"
                                    src={motifcheck}
                                    alt=""
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text">
                      <Text text={text.featureTitle[1]} />
                      <Text text={text.featureDesc[1]} />
                    </div>
                  </div>
                </div>
                {/*  스티커 품질   */}
                <div className="detail">
                  <div className="detail-wrap">
                    <div className="img img-4">
                      <div className="box">
                        <div className="box-wrap">
                          <div
                            className={classnames("drop", {
                              active: this.state.dropAnimation
                            })}
                          >
                            {drops.map((drop, index) => (
                              <div key={index} className="drop-img">
                                <img
                                  className={classnames(`drop-${index}`, {
                                    active: this.state.dropAnimation
                                  })}
                                  src={drop}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                          <div
                            className={classnames("eraser", {
                              active: this.state.dropAnimation
                            })}
                          >
                            <img
                              className={classnames({
                                active: this.state.dropAnimation
                              })}
                              src={eraser}
                              alt=""
                            />
                          </div>
                          <div className="namesticker">
                            <div className="text"> 김해피</div>
                            <div
                              className={classnames("slash", {
                                active: this.state.dropAnimation
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text">
                      <Text text={text.featureTitle[2]} />
                      <Text text={text.featureDesc[2]} />
                    </div>
                  </div>
                </div>
                {/* 다양한 디자인 */}
                <div className="detail detail-3">
                  <div className="detail-wrap">
                    <div className="img img-3">
                      <div className="box">
                        <div className="design">
                          <div className="design-box">
                            <img src={designcut[0]} alt="" />
                            <img src={designcut[1]} alt="" />

                            <div className="design-3">
                              <img src={designcut[2]} alt="" />
                              <img src={designcut[3]} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text">
                      <Text text={text.featureTitle[3]} />
                      <Text text={text.featureDesc[3]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 해피네임 비전 */}
          <section className="vision-wrap">
            <div className="vision">
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
