import React from "react";

const { Provider, Consumer } = React.createContext();

class LanguageProvider extends React.Component {
  state = {
    lang: "ko"
  };
  onChangeLang = lang => {
    this.setState({
      lang
    });
  };
  componentDidMount() {
    let lang = navigator.language.slice(0, 2);
    lang = lang === "ko" ? "ko" : "en";
    this.onChangeLang(lang);
  }
  render() {
    const { lang } = this.state;
    const { onChangeLang } = this;
    const value = { lang, onChangeLang };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { LanguageProvider, Consumer as LanguageConsumer };
