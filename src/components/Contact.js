import React from "react";
import Text from "../components/Text";
import { browser } from "react-router-dom";
import classnames from "classnames";
export default class Contact extends React.Component {
  componentDidMount() {
    new daum.roughmap.Lander({
      timestamp: "1546819626423",
      key: "rnos",
      mapWidth: "580",
      mapHeight: "382"
    }).render();
  }
  render() {
    const { text } = this.props;

    return (
      <div className="contact">
        <div className="wrap">
          <h2 className="component-title">CONTACT US</h2>
          <div className="content">
            <a href="https://place.map.daum.net/1927481863">
              <div
                id="daumRoughmapContainer1546819626423"
                className="root_daum_roughmap root_daum_roughmap_landing"
                style={{ width: "580px" }}
              />
            </a>

            <div className="content__text">
              <div
                className={classnames("title", {
                  en: this.props.lang === "en"
                })}
              >
                <Text title="main" text={text.contactTitle1} />
                {text.contactTitle2 ? (
                  <Text title="sub" text={text.contactTitle2} />
                ) : null}
              </div>
              <address className="address">
                <p>
                  <span className="bold">{text.contact.company}</span>
                  <br />
                  {text.contact.address} <br />
                  {text.contact.address2 ? (
                    <span>
                      {text.contact.address2} <br />
                    </span>
                  ) : null}
                  <a href={`tel:${text.contact.tel}`}>{text.contact.tel}</a>{" "}
                  {text.contact.cs}:
                  <a href={`tel:${text.contact.cstel}`}>{text.contact.cstel}</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
