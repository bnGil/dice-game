import React, { Component } from "react";

class HoldButton extends Component {
  fireFunctionsOnClick = () => {
    this.props.updateTotalScore();
    this.props.updateCurrentSum(0);
    this.props.changeTurn();
  };

  render() {
    return <button onClick={this.fireFunctionsOnClick}>Hold</button>;
  }
}

export default HoldButton;
