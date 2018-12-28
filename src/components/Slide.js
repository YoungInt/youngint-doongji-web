import React from "react";
import classnames from "classnames";
import arrow_left from "../images/arrow_black_left";
import arrow_right from "../images/arrow_black_right";
import arrow_right_white from "../images/arrow_white_right";
import arrow_left_white from "../images/arrow_white_left";
import button_play from "../images/button_play";
import button_stop from "../images/button_stop";

export default class Slide extends React.Component {
  state = {
    activeId: 0,
    pause: false
  };
  componentDidMount() {
    this.timeout();
  }
  timeout = () => {
    const { handleImageChange } = this.props;
    this.state.pause &&
      this.setState({
        pause: false
      });
    this.interval = setInterval(() => {
      const id =
        this.state.activeId < this.props.images.length - 1
          ? this.state.activeId + 1
          : 0;
      this.setState({
        activeId: id
      });
      handleImageChange && handleImageChange(id);
    }, 5000);
  };
  pause = () => {
    this.interval && clearInterval(this.interval);
    this.setState({
      pause: true
    });
  };

  componentWillUnmount() {
    this.pause();
  }
  render() {
    const { images, slideName, handleImageChange } = this.props;
    const { activeId } = this.state;
    return (
      <div className="slide-wrap">
        <div className={`button ${slideName && slideName}`}>
          <div
            className="backward"
            onClick={e => {
              const id = activeId > 0 ? activeId - 1 : images.length - 1;
              this.setState({
                activeId: id
              });
              handleImageChange && handleImageChange(id);
            }}
          >
            <img
              src={slideName === "happy" ? arrow_left : arrow_left_white}
              alt=""
            />
          </div>
          <div
            className="forward"
            onClick={e => {
              const id = activeId < images.length - 1 ? activeId + 1 : 0;
              this.setState({
                activeId: id
              });
              handleImageChange && handleImageChange(id);
            }}
          >
            <img
              src={slideName === "happy" ? arrow_right : arrow_right_white}
              alt=""
            />
          </div>
        </div>
        <div className={classnames("slide", slideName && slideName)}>
          <ul className="list">
            {images.map((img, index) => (
              <li
                key={index}
                className={classnames({ active: index === activeId })}
              >
                <div className={classnames("img", slideName && slideName)}>
                  <img src={img} alt="" />
                </div>
              </li>
            ))}
          </ul>
          <ul className="slide__nav">
            {images.map((img, index) => (
              <li
                onClick={e => {
                  this.setState({
                    activeId: index
                  });
                  handleImageChange && handleImageChange(index);
                }}
                key={index}
                className={classnames({ active: index === activeId })}
              />
            ))}
            <div
              className="control"
              onClick={e => (this.state.pause ? this.timeout() : this.pause())}
            >
              <img
                className={classnames({
                  stop: !this.state.pause,
                  play: this.state.pause
                })}
                src={this.state.pause ? button_play : button_stop}
                alt=""
              />
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
