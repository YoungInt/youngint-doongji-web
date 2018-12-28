import React from "react";
import LangIcon from "../components/LangIcon";
import homeLogo from "../images/button_home.svg";
export default class Header extends React.Component {
  render() {
    const { classname } = this.props;
    return (
      <header className="header-wrap">
        <div className="header">
          <div className="logo">
            {classname === "main" ? (
              <a href="/">
                <img src={"#"} alt="로고 이미지" />
              </a>
            ) : (
              <a href="/">
                <img src={homeLogo} alt="" />
              </a>
            )}
          </div>
          <nav className="menu">
            {classname === "main" ? (
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Brand</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <LangIcon />
              </ul>
            ) : (
              <LangIcon />
            )}
          </nav>
        </div>
      </header>
    );
  }
}
