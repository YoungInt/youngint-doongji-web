import React from "react";
import partner from "../images/partnership";

export default class Pratner extends React.Component {
  render() {
    return (
      <div className="partner">
        <div className="wrap">
          <div className="title">
            <div>PARTNERSHIP</div>
          </div>
          <div className="img">
            <img src={partner} alt="" />
          </div>
          <div className="desc">
            더 좋은 서비스를 제공하고 더 많은 고객들과 만나기 위해 다양한
            협력사와 함께 하고 있습니다.
          </div>
        </div>
      </div>
    );
  }
}
