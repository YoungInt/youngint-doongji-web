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
      this.state.activeId < this.props.images.length - 1
        ? this.setState({
            activeId: this.state.activeId + 1
          })
        : this.setState({
            activeId: 0
          });
    }, 3000);
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
          onClick={e =>
            activeId > 0
              ? this.setState({
                  activeId: activeId - 1
                })
              : this.setState({
                  activeId: images.length - 1
                })
          }
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
                onClick={e =>
                  this.setState({
                    activeId: index
                  })
                }
                key={index}
                className={classnames({ active: index === activeId })}
              />
            ))}
            <li
              onClick={e => (this.state.pause ? this.timeout() : this.pause())}
            >
              {this.state.pause ? "시작" : "멈춤"}
            </li>
          </ul>
        </div>
        <div
          className="forward"
          onClick={e =>
            activeId < images.length - 1
              ? this.setState({
                  activeId: activeId + 1
                })
              : this.setState({
                  activeId: 0
                })
          }
        >
          뒤로
        </div>
      </div>
    );
  }
}
