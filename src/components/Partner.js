import React from "react";
import partner from "../images/partnership";
import partner__mobile from "../images/main_partnership_mobile";

import Text from "../components/Text";

export default class Pratner extends React.Component {
  render() {
    const { text, screenWidth } = this.props;

    return (
      <div className="partner">
        <div className="wrap">
          <h1 className="title">PARTNERSHIP</h1>
          <div className="img">
            {screenWidth > 480 ? (
              <img src={partner} alt="" />
            ) : (
              <img src={partner__mobile} style={{ width: "600px" }} alt="" />
            )}
          </div>
          <div className="desc">
            <Text text={text.p7} />
          </div>
        </div>
      </div>
    );
  }
}
