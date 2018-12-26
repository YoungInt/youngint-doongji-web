import React from "react";
import partner from "../images/partnership";

import Text from "../components/Text";

export default class Pratner extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div className="partner">
        <div className="wrap">
          <h1 className="title">PARTNERSHIP</h1>
          <div className="img">
            <img src={partner} alt="" />
          </div>
          <div className="desc">
            {/* 더 좋은 서비스를 제공하고 더 많은 고객들과 만나기 위해 다양한
            협력사와 함께 하고 있습니다. */}
            <Text text={text.p7} />
          </div>
        </div>
      </div>
    );
  }
}
