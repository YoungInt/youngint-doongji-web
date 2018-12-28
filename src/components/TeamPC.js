import React from "react";
import classNames from "classnames";
import teams from "../API/memberAPI";
import arrow_left from "../images/arrow_black_left";
import arrow_right from "../images/arrow_black_right";

export default class TeamPC extends React.Component {
  state = {
    members: [...teams, ...teams, ...teams],
    activeId: 16,
    scrollPositon: 0,
    srcoll: true
  };
  static timer = false;
  async componentDidMount() {}
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
    if (
      direction > 0 &&
      this.state.activeId < this.state.members.length - 3 &&
      this.state.activeId < this.state.members.length
    ) {
      this.setState({
        activeId: ++this.state.activeId
      });
    } else if (
      direction < 0 &&
      this.state.activeId > 2 &&
      this.state.activeId > 0
    ) {
      this.setState({
        activeId: --this.state.activeId
      });
    }
  };

  render() {
    const { activeId, members } = this.state;

    return (
      <React.Fragment>
        <div className="team-container">
          <div className="team">
            <div className="team__title">
              <h2 className="title">MEET OUR TEAM</h2>
            </div>
            <div className="team__member">
              <div
                className="button left"
                onClick={e => {
                  activeId > 2 &&
                    this.setState({
                      activeId: activeId - 1
                    });
                }}
              >
                <img src={arrow_left} alt="" />
              </div>

              <div
                className="carousel-box"
                id="carousel-box"
                onWheel={e => this.throttling(e, this.handleScroll)}
              >
                <div className={classNames("carousel", `carousel-${activeId}`)}>
                  {members.map((member, index) => (
                    <div
                      onClick={e => {
                        index >= 2 &&
                          index < members.length - 3 &&
                          this.setState({ activeId: index });
                      }}
                      key={index}
                      className={classNames("item", {
                        active: this.state.activeId === index
                      })}
                    >
                      <div
                        className={classNames("item__img", {
                          active: activeId === index
                        })}
                      >
                        <img src={member.img} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="button right"
                onClick={e =>
                  activeId !== members.length - 3 &&
                  this.setState({
                    activeId: activeId + 1
                  })
                }
              >
                <img src={arrow_right} alt="" />
              </div>
            </div>
            <div className="team__message">
              <p className="bold">{`"${members[activeId].message}"`}</p>
              <p>{members[activeId].name}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
