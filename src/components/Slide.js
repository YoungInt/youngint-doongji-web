import React from "react";
import classnames from "classnames";
export default class Slide extends React.Component {
  state = {
    activeId: 0,
    pause: false
  };
  componentDidMount() {
    this.timeout();
  }
  timeout = () => {
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
      this.props.handleImageChange(id);
    }, 5000);
  };
  pause = () => {
    this.interval && clearInterval(this.interval);
    this.setState({
      pause: true
    });
  };

  componentWillUnmount() {
    this.pause;
  }
  render() {
    const { images, slideName } = this.props;
    const { activeId } = this.state;
    return (
      <div className="slide-wrap">
        <div
          className="backward"
          onClick={e => {
            const id = activeId > 0 ? activeId - 1 : images.length - 1;
            this.setState({
              activeId: id
            });
            this.props.handleImageChange(id);
          }}
        >
          앞으로
        </div>
        <div className={classnames("slide", slideName)}>
          <ul className="list">
            {images.map((img, index) => (
              <li
                key={index}
                className={classnames({ active: index === activeId })}
              >
                <div className={classnames("img", slideName)}>
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
                  this.props.handleImageChange(index);
                }}
                key={index}
                className={classnames({ active: index === activeId })}
              />
            ))}
            <div
              onClick={e => (this.state.pause ? this.timeout() : this.pause())}
            >
              {this.state.pause ? "시작" : "멈춤"}
            </div>
          </ul>
        </div>
        <div
          className="forward"
          onClick={e => {
            const id = activeId < images.length - 1 ? activeId + 1 : 0;
            this.setState({
              activeId: id
            });
            this.props.handleImageChange(id);
          }}
        >
          뒤로
        </div>
      </div>
    );
  }
}
