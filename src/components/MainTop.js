import React from "react";
import { Link } from "react-router-dom";

import Text from "../components/Text";
import Header from "../components/Header";
import LangIcon from "../components/LangIcon";
export default class MainHeader extends React.Component {
  render() {
    const { text, lang } = this.props;

    return (
      <React.Fragment>
        <div className="mainTop">
          <div className="box" />

          <Header classname="main" />
          <div className="mainTop__img">
            <div className="content">
              <div className="content-wrap">
                <div className="title">
                  <Text text={text.t1} />
                </div>
                <div className="desc">
                  <Text text={text.p1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="wrap">
            <div className="content">
              <Text text={text.t2} />
              <Text text={text.p2} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
