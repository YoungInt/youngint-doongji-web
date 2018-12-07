import React from "react";

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
    }
  ];
  render() {
    return (
      <React.Fragment>
        <div className="team">
          <div className="team__title">MEET OUR TEAM</div>

          <div className="team__member">
            <div className="button left" />
            <div className="carousel">
              {this.members.map(member => (
                <div className="item">
                  <div className="item__img">
                    <img src={member.img} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="button right" />
          </div>
          <div className="team__message" />
        </div>
      </React.Fragment>
    );
  }
}
