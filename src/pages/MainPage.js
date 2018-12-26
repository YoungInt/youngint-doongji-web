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

export default class MainPage extends React.Component {
  render() {
    const { mobile } = this.props;
    return (
      <LanguageConsumer>
        {({ lang, onChangeLang }) => (
          <div>
            <MainTop text={mainText[lang]} />
            <div id="philosophy">
              <Philosophy text={mainText[lang]} />
            </div>
            <Partner text={mainText[lang]} />
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
