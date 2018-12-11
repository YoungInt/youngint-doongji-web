import React from "react";
import TeamPC from "../components/TeamPC";
import MainTop from "../components/MainTop";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <MainTop />
        <TeamPC />
      </div>
    );
  }
}
