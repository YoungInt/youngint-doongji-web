import React from "react";
import LangIcon from "../components/LangIcon";
import homeLogo from "../images/button_home.svg";
import young_logo from "../images/youngint_logo";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class Header extends React.Component {
  state = {
    hidden: false
  };
  scrollPosition = 0;

  componentDidMount() {
    this.scrollPosition = window.scrollY;
    this.scrollEvent = setInterval(() => {
      window.addEventListener("scroll", this.handleScroll);
    }, 100);
  }
  handleScroll = () => {
    const currentPosition = window.scrollY;
    const { hidden } = this.state;
    this.scrollPosition < currentPosition
      ? !hidden &&
        currentPosition > 80 &&
        this.setState({
          hidden: true
        })
      : hidden &&
        this.setState({
          hidden: false
        });
    this.scrollPosition = currentPosition;
  };
  componentWillUnmount() {
    clearInterval(this.scrollEvent);
  }
  render() {
    const { classname, brand } = this.props;
    const { hidden } = this.state;
    return (
      <header>
        <div
          className={classnames(`container-wrap ${brand} ${classname}`, {
            hidden: hidden
          })}
        >
          <div className={`container ${brand} ${classname}`}>
            <div className={`header ${classname}`}>
              <div className={`logo ${classname}`}>
                {classname === "main" ? (
                  <Link to="/">
                    <img src={young_logo} alt="로고 이미지" />
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
