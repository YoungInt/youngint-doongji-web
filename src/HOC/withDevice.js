import React from "react";

const withDevice = WrappedComponent => {
  return class extends React.Component {
    state = {
      screenWidth: 1440
    };
    screenWidth = 1440;
    componentDidMount() {
      this.setState({
        screenWidth: window.innerWidth
      });
    }

    render() {
      return <WrappedComponent screenWidth={this.state.screenWidth} />;
    }
  };
};

export default withDevice;
