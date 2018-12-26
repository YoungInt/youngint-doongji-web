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
  render() {
    const { lang } = this.state;
    const { onChangeLang } = this;
    const value = { lang, onChangeLang };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { LanguageProvider, Consumer as LanguageConsumer };
