import React from "react";
import LangIcon from "../components/LangIcon";
import homeLogo from "../images/button_home.svg";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    const { classname, brand } = this.props;
    return (
      <header>
        <div className={`container-wrap ${brand} ${classname}`}>
          <div className={`container ${brand} ${classname}`}>
            <div className={`header ${classname}`}>
              <div className={`logo ${classname}`}>
                {classname === "main" ? (
                  <Link to="/">
                    <img src={"#"} alt="로고 이미지" />
                  </Link>
                ) : (
                  <a href="/">
                    <img className={classname} src={homeLogo} alt="" />
                  </a>
                )}
              </div>
              <nav className="menu">
                {classname === "main" ? (
                  <ul>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#brand">Brand</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <LangIcon />
                    </li>
                  </ul>
                ) : (
                  <LangIcon />
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
