import React from "react";
import TeamPC from "../components/TeamPC";
import MainTop from "../components/MainTop";
import Footer from "../components/Footer";
import Philosophy from "../components/Philosophy";
export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <MainTop />
        <Philosophy />
        <TeamPC />
        <Footer />
      </div>
    );
  }
}
