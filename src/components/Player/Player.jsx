import React, { Component } from "react";
import "./Player.css";

class Player extends Component {
  render() {
    return (
      <div className="player-container">
        <h2 className="name">{this.props.name}</h2>
        <p className="total-score">14</p>
        <div className="current-score-container">
          <p className="current-score-header">CURRENT</p>
          <p className="current-score">0</p>
        </div>
      </div>
    );
  }
}

export default Player;
