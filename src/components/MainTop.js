import React from "react";

export default class MainHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="mainTop">
          <header className="mainTop__header">
            <div className="log">logo-img</div>
            <nav className="menu">
              <ul>
                <li>About</li>
                <li>Brand</li>
                <li>Contact</li>
              </ul>
            </nav>
          </header>
          <div className="mainTop__img">
            <div className="content">
              <div className="title">
                <p>사람에게 집중한</p>
                <p>익숙하지만 '새로운'</p>
                <p>키오스크 서비스</p>
              </div>
              <div className="desc">
                <p>영인터내셔널은 고객의 아이덴티티를 만들어주는 키오스크</p>
                <p>무인 자동화 판매기 개발/유통 회사입니다.</p>
                <p>
                  고객들이 키오스크를 사용함에 있어 더 나은 사용환경과 경험을
                  제공하는 것에 집중하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}