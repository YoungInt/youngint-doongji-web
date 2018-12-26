import React from "react";
import Text from "../components/Text";

export default class Philosophy extends React.Component {
  render() {
    const { text } = this.props;
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
                    <img
                      src="https://images.unsplash.com/photo-1544273677-c433136021d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                      alt=""
                    />
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
                {/* 2018년 10월 기준 */}
                <Text text={text.p6} />
              </div>
            </div>
            <div className="content-img">
              <img src="#" alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
