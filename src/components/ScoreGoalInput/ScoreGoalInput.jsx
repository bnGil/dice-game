import React, { Component } from "react";

class ScoreGoalInput extends Component {
  render() {
    return (
      <input
        type="text"
        className="score-goal-input"
        onChange={(e) => this.props.onInputChange(e.target.value)}
      ></input>
    );
  }
}

export default ScoreGoalInput;
