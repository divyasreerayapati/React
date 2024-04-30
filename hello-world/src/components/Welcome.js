import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} {this.props.heroname}
      </h1>
    );
  }
}

export let dummyvar = () => {
  return <h2>This a named component Hello everyone</h2>;
};

export default Welcome;
