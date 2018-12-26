import React from "react";
import Text from "../components/Text";

export default class Contact extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="contact">
        <div className="wrap">
          <h2 className="component-title">CONTACT US</h2>
          <div className="content">
            <div className="content__map">
              <img src="#" alt="" />
            </div>
            <div className="content__text">
              <div className="title">
                {/* 영인터내셔널은 <br />
                입점제안 및 제휴문의를 <br />
                기다리고 있습니다. */}
                <Text text={text.contactTitle} />
              </div>
              <address className="address">
                <p>
                  <span className="bold">(주)영인터내셔널</span>
                  <br />
                  (16967)경기도 용인시 기흥구 신갈로 121 영인터내셔널 <br />
                  <a href="tel:031-123-4567">031-123-4567</a> 고객센터:
                  <a href="tel:070-123-4567">070-123-4567</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
