import React from "react";
import Text from "../components/Text";
import achievement_arm from "../images/achievement-agreement-arms-1068523";
export default class Philosophy extends React.Component {
  render() {
    const { text, screenWidth } = this.props;
    return (
      <React.Fragment>
        <div className="philosophy">
          <div className="philosophy__wrap">
            <h2 className="title">PHILOSOPHY</h2>
            <div className="content">
              <div className="content__keyword">
                <div className="wrap">
                  {text.p3.map((t, index) => (
                    <div key={index} className="keyword">
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
                    <img src={achievement_arm} alt="" />
                  </div>
                  <div className="text">
                    <div className="title">
                      <Text text={text.t4} />
                    </div>
                    <div className="desc">
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
                <Text text={text.t6} />
              </div>
              <div className="date">
                <Text text={text.p6} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
