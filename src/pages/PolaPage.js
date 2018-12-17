import React from "react";
import { Helmet } from "react-helmet";
import Slide from "../components/Slide";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import titleNavy from "../images/00_title_navy";
import titleSub from "../images/00_title_sub";
import polaDeliver from "../images/10_pola_deliver.gif";
import { runInThisContext } from "vm";
export default class PolaPage extends React.Component {
  state = {
    activeId: 0
  };
  polaImages = [
    "https://images.unsplash.com/photo-1544586571-42a0e47dad19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1544555103-3fc48768dcf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1544585456-232ab700cc65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  ];
  onImageChange = id => {
    this.setState({
      activeId: id
    });
    console.log(id);
  };
  polaTexts = [
    [
      "사랑하는 친구, 가족, 반려동물",
      "그리고 나의 최애를",
      "폴라폴라로 더욱 특별하게 간직하세요"
    ],
    ["소중한 사진으로 나의 공간을 더욱 의미있게 만들어요"],
    ["나만의 커스텀(Custom) 굿즈"],
    ["특별한 날, 오래도록 남는 선물"],
    ["따뜻한 추억들을 간편하게 모아봐요"]
  ];
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <title>폴라폴라 포토자판기</title>
        </Helmet>
        <div className="pola">
          {/* 폴라 헤더 */}
          <div className="header-wrap">
            <header className="header">
              <ul>
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>지구</li>
              </ul>
            </header>
          </div>
          {/* 폴라  */}
          <div className="main-wrap">
            <div className="main">
              <img className="top" src={titleSub} alt="" />
              <img className="bottom" src={titleNavy} alt="" />
            </div>
            <img className="pola" src={polaDeliver} alt="" />
          </div>
          <section className="intro-wrap">
            <div className="intro">
              <div className="text">
                폴라로이드 스티커 배달부,
                <br />
                <h2 className="bold">폴라폴라</h2>입니다.
                <br />
                소중한 추억을 배달해드려요.
              </div>
            </div>
          </section>
          <section className="use-wrap">
            <div className="use">
              <ul>
                <li>
                  <div className="img">
                    <img src="#" alt="폴라폴라 챗봇" />
                  </div>
                  <div className="text">
                    <p>
                      키워드를 입력하여
                      <br />
                      폴라폴라와 연결하고
                    </p>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="#" alt="폴라폴라 사진선택" />
                  </div>
                  <div className="text">
                    <p>
                      채팅창에 바로
                      <br />
                      사진을 전송하면
                    </p>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="#" alt="" />
                  </div>
                  <div className="text">
                    <p>
                      나만의 폴라로이드 사진을
                      <br />
                      간편하게 만들 수 있어요
                      <br />
                      <span className="bold">참 쉽죠?</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="feature-wrap">
            <div className="feature">
              <div className="img">
                <img src="#" alt="" />
              </div>
              <div className="detail-wrap">
                <div className="detail-top">
                  <div className="item">
                    <div className="img">
                      <img src="" alt="" />
                    </div>
                    <div className="title">
                      <span className="bold">절취선</span>이 있어요
                    </div>
                    <p>
                      폴라폴라는 가운데에 절취선이 있어서
                      <br />
                      취향에 따라, 크기에 맞게 사용할 수 있으며
                      <br />
                      친구나 연인과 간편하게 나눌 수 있습니다.
                    </p>
                    <div className="item">
                      <div className="img">
                        <img src="" alt="" />
                      </div>
                      <div className="title">
                        <span className="bold">스티커</span>입니다
                      </div>
                      <p>
                        폴라폴라는 가운데에 절취선이 있어서
                        <br />
                        취향에 따라, 크기에 맞게 사용할 수 있으며
                        <br />
                        친구나 연인과 간편하게 나눌 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="detail-bottom">
                  <div className="item">
                    <div className="img">
                      <img src="" alt="" />
                    </div>
                    <div className="title">
                      <span className="bold">방수</span>가 되고 <br />
                      <span className="bold">내구성</span>이 좋아요
                    </div>
                    <p>
                      폴라폴라의 필름은 방수가 되는 재질입니다. <br />
                      시간이 지나도 색이 잘 바라거나 찢어지지 않아서
                      <br />
                      소중한 사진을 오래 보관할 수 있습니다. <br />
                    </p>
                  </div>
                  <div className="item">
                    <div className="img">
                      <img src="" alt="" />
                    </div>
                    <div className="title">
                      <span className="bold">팝업(Pop-up) </span>
                      <br /> <span className="bold"> 한정 테마</span>가 있어요.
                    </div>
                    <p>
                      일정 기간동안만 만나볼 수 있는 한정 테마를 운영합니다.
                      <br />
                      여러 캐릭터사의 테마와 이벤트 테마를 준비중입니다.
                      <br />
                      다음 팝업테마는 어떤걸까요? 기대해주세요!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="message">
            <div classsName="text">
              {this.polaTexts[this.state.activeId].map(line => (
                <p>{line}</p>
              ))}
            </div>
            <div className="img">
              <Slide
                images={this.polaImages}
                slideName={"pola"}
                handleImageChange={this.onImageChange}
              />
            </div>
          </section>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
