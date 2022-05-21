import React, { Component } from "react";

class RestartButton extends Component {
  render() {
    return <button onClick={this.props.restart}>RESETART</button>;
  }
}

export default RestartButton;
