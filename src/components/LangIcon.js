import React from "react";

import { LanguageConsumer } from "../context/LanguageContext";
import globalIcon from "../images/button_language";
import bubbleIcon from "../images/common_language_bubble";

export default class LangIcon extends React.Component {
  render() {
    return (
      <LanguageConsumer>
        {({ lang, onChangeLang }) => (
          <div className={`lang ${this.props.class}`} onClick={onChangeLang}>
            <div className="lang__bubble">
              <img className="icon" src={bubbleIcon} alt="" />
              <div className={`text ${this.props.class}`}>
                {lang === "ko" ? "KOR" : "ENG"}
              </div>
            </div>
            <div className="lang__global">
              <img src={globalIcon} alt="" />
            </div>
          </div>
        )}
      </LanguageConsumer>
    );
  }
}
