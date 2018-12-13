import React from "react";
import TeamPC from "../components/TeamPC";
import MainTop from "../components/MainTop";
import Footer from "../components/Footer";
import Philosophy from "../components/Philosophy";
import Brand from "../components/Brand";
import Partner from "../components/Partner";
import Contact from "../components/Contact";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <MainTop />
        <Philosophy />
        <Brand />
        <Partner />
        <Contact />
        <TeamPC />
        <Footer />
      </div>
    );
  }
}
