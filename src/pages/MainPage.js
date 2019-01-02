import React from "react";
import TeamPC from "../components/TeamPC";
import MainTop from "../components/MainTop";
import Footer from "../components/Footer";
import Philosophy from "../components/Philosophy";
import Brand from "../components/Brand";
import Partner from "../components/Partner";
import Contact from "../components/Contact";
import { LanguageConsumer } from "../context/LanguageContext";
import { mainText } from "../API/textAPI";
import Helmet from "react-helmet";
export default class MainPage extends React.Component {
  render() {
    const { screenWidth } = this.props;
    console.log("screenWidth:" + screenWidth);
    return (
      <LanguageConsumer>
        {({ lang, onChangeLang }) => (
          <div>
            <Helmet>
              <title>영인터내셔널</title>
              <meta
                name="description"
                content="영인터내셔널 홈페이지 입니다."
              />
              <meta
                name="keywords"
                content="영인터내셔널, 폴라폴라, 해피네임스티커, 네임스티커, 포토 자판기, 자판기, 키오스크"
              />
            </Helmet>
            <MainTop text={mainText[lang]} lang={lang} />
            <div id="philosophy">
              <Philosophy text={mainText[lang]} />
            </div>
            <Partner screenWidth={screenWidth} text={mainText[lang]} />
            <div id="brand">
              <Brand text={mainText[lang]} />
            </div>
            <div id="contact">
              <Contact text={mainText[lang]} />
            </div>
            <TeamPC text={mainText[lang]} />
            <Footer text={mainText[lang]} />
          </div>
        )}
      </LanguageConsumer>
    );
  }
}
