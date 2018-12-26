import React from "react";

const withDevice = WrappedComponent => {
  return class extends React.Component {
    mobile = true;
    componentDidMount() {
      this.getDiviceWidth();
    }
    getDiviceWidth = () => {
      console.log("hhhhh");
    };
    render() {
      return <WrappedComponent mobile={this.mobile} />;
    }
  };
};

export default withDevice;
