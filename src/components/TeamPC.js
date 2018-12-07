import React from "react";
import classNames from "classnames";

export default class TeamPC extends React.Component {
  members = [
    {
      img: "https://www.jspsych.org/img/blue.png",
      message: "0 오늘도 열심히 일했다"
    },
    {
      img:
        "https://cdn7.bigcommerce.com/s-fhu3o9zjsj/images/stencil/500x659/products/1293/9619/img-thing__52728.1492104647.jpg?c=2",
      message: "1 칼퇴하자"
    },
    {
      img:
        "http://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg",
      message: "2 아무말"
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Location_dot_yellow.svg/768px-Location_dot_yellow.svg.png",
      message: "3 아무말"
    },
    {
      img: "https://www.jspsych.org/img/blue.png",
      message: "4 아무말"
    },
    {
      img: "https://www.jspsych.org/img/blue.png",
      message: "5 아무말 "
    },
    {
      img: "https://www.jspsych.org/img/blue.png",
      message: "6 아무말 "
    },
    {
      img: "https://www.jspsych.org/img/blue.png",
      message: "7 아무말 "
    },
    {
      img: "https://www.jspsych.org/img/blue.png",
      message: "8 아무말 "
    },
    {
      img: "https://www.jspsych.org/img/blue.png",
      message: "9 아무말 "
    },
    {
      img: "https://www.jspsych.org/img/blue.png",
      message: "10 아무말 "
    }
  ];
  state = {
    activeId: 2
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
            <div className="carousel-box">
              <div
                className={classNames(
                  "carousel",
                  `carousel-${this.state.activeId}`
                )}
              >
                {this.members.map((member, index) => (
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
                this.state.activeId !== this.members.length - 3 &&
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
