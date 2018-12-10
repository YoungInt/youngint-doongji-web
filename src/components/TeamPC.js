import React from "react";
import classNames from "classnames";
import members from "../API/memberAPI";

export default class TeamPC extends React.Component {
  state = {
    activeId: 2,
    scrollPositon: 0,
    srcoll: true
  };
  static timer = false;

  throttling = async (e, func) => {
    const deltaX = e.deltaX;
    if (!this.timer) {
      func(deltaX);
      this.timer = true;
      await setTimeout(() => {
        this.timer = false;
      }, 2000);
    }
  };
  handleScroll = deltaX => {
    const direction = deltaX;
    if (direction > 0 && this.state.activeId < members.length) {
      this.setState({
        activeId: ++this.state.activeId
      });
    } else if (direction < 0 && this.state.activeId > 0) {
      this.setState({
        activeId: --this.state.activeId
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="team">
          <div className="team__title">MEET OUR TEAM</div>

          <div className="team__member">
            <div
              className="button left"
              onClick={e =>
                this.state.activeId > 2 &&
                this.setState({
                  activeId: --this.state.activeId
                })
              }
            >
              뒤로
            </div>
            <div
              className="carousel-box"
              id="carousel-box"
              onWheel={e => this.throttling(e, this.handleScroll)}
            >
              <div
                className={classNames(
                  "carousel",
                  `carousel-${this.state.activeId}`
                )}
              >
                {members.map((member, index) => (
                  <div
                    onClick={e => {
                      this.setState({ activeId: index });
                      console.log(this.state.activeId, index);
                    }}
                    key={index}
                    className={classNames("item", {
                      // active: this.state.activeId + 2 === index
                    })}
                  >
                    <div
                      className={classNames("item__img", {
                        active: this.state.activeId === index
                      })}
                    >
                      <img src={member.img} alt="" />
                      <div>index: {index}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="button right"
              onClick={e =>
                // this.state.activeId !== this.members.length - 3 &&
                this.setState({
                  activeId: ++this.state.activeId
                })
              }
            >
              >앞으로
            </div>
          </div>
          <div>activeId {this.state.activeId}</div>
          <div className="team__message" />
        </div>
      </React.Fragment>
    );
  }
}
