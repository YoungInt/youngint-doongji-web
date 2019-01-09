import React from "react";
import classnames from "classnames";

export default class Text extends React.Component {
  matchText = text => {
    let reg = /(\*)([\s|\S]+?)\1/g;
    let matchedText = text.match(reg);
    matchedText =
      matchedText && matchedText.map(text => text.replace(/[*]/g, ""));
    return matchedText;
  };
  convertLine = text => {
    const matchedText = this.matchText(text);
    if (matchedText) {
      let splitedText = text.split("*").filter(t => t !== "");
      let arr = splitedText.map((text, index) =>
        text !== "" && text !== " " && matchedText.includes(text)
          ? { bold: text }
          : { normal: text }
      );
      return arr;
    } else {
      return text !== "" && [{ normal: text }];
    }
  };
  convertP = text => {
    const convertedText = [];
    const splitedText = text.split("//n");
    splitedText.map(line => convertedText.push(this.convertLine(line)));
    return convertedText;
  };
  render() {
    const { text, title } = this.props;
    const convertedText = this.convertP(text);
    return (
      <p className={title}>
        {convertedText.map((arr, index) =>
          arr.map((t, i) =>
            Object.keys(t)[0] === "normal" ? (
              index !== convertedText.length - 1 && i === arr.length - 1 ? (
                //  스페이스
                <span key={i}>
                  {t.normal}
                  <br />
                </span>
              ) : (
                t.normal
              )
            ) : index !== convertedText.length - 1 && i === arr.length - 1 ? (
              <span key={i} className="bold">
                {t.bold}
                <br />
              </span>
            ) : (
              <span key={i} className="bold">
                {t.bold}
              </span>
            )
          )
        )}
      </p>
    );
  }
}
