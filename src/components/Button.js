import React from "react";
import classnames from "classnames";
export default class Buttons extends React.Component {
  render() {
    const { style, onClick, hover } = this.props;
    return (
      <button
        onClick={onClick}
        type="button"
        className={classnames(
          { round: style === "round" },
          { sharp: style === "sharp" },
          { hover }
        )}
      >
        Click Me!
      </button>
    );
  }
}
5;
