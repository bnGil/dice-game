import React, { Component } from "react";

class ResetButton extends Component {
  fireFunctionsOnClick = () => {
    console.log("reset");
  };

  render() {
    return <button onClick={this.fireFunctionsOnClick}>RESETART</button>;
  }
}

export default ResetButton;
