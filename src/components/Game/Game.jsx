import React, { Component } from "react";
import "./Game.css";
import Player from "../Player/Player";
import Dice from "../Dice/Dice";
import Button from "../Button/Button";

class Game extends Component {
  render() {
    return (
      <div className="game-container">
        <Player name="PLAYER 1" />
        <div className="game-dashboard">
          <Button buttonType="reset" />
          <div className="dice-container">
            <Dice />
            <Dice />
          </div>
          <Button buttonType="hold" />
        </div>
        <Player name="PLAYER 2" />
      </div>
    );
  }
}

export default Game;
