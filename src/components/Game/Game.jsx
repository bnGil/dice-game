import React, { Component } from "react";
import "./Game.css";
import Player from "../Player/Player";
import RollDice from "../RollDice/RollDice";
// import ResetButton from "../Buttons/ResetButton";
import HoldButton from "../Buttons/HoldButton";

class Game extends Component {
  state = {
    totalScore1: 0,
    totalScore2: 0,
    scoreGoal: 20,
    currentDiceRollSum: 0,
    player1Turn: true,
  };

  updateCurrentDiceRollSum = (newSum) => {
    this.setState(
      (prev) => {
        return {
          currentDiceRollSum:
            newSum === 0 ? 0 : prev.currentDiceRollSum + newSum,
        };
      },
      () => console.log("currentSum", this.state.currentDiceRollSum)
    );
  };

  updateTotalScore = () => {
    this.setState(
      (prev) => {
        return this.state.player1Turn
          ? { totalScore1: prev.totalScore1 + prev.currentDiceRollSum }
          : { totalScore2: prev.totalScore2 + prev.currentDiceRollSum };
      },
      () => console.log("total", this.state.totalScore1)
    );
  };

  changeTurn = () => {
    this.setState((prev) => {
      return { player1Turn: !prev.player1Turn };
    });
  };

  render() {
    return (
      <div className="game-container">
        <Player
          name="PLAYER 1"
          totalScore={this.state.totalScore1}
          currentScore={this.state.currentDiceRollSum}
          isMyTurn={this.state.player1Turn}
        />
        <div className="game-dashboard">
          {/* <ResetButton /> */}
          <RollDice updateCurrentSum={this.updateCurrentDiceRollSum} />
          <HoldButton
            updateCurrentSum={this.updateCurrentDiceRollSum}
            updateTotalScore={this.updateTotalScore}
            changeTurn={this.changeTurn}
          />
        </div>
        <Player
          name="PLAYER 2"
          totalScore={this.state.totalScore2}
          currentScore={this.state.currentDiceRollSum}
          isMyTurn={!this.state.player1Turn}
        />
      </div>
    );
  }
}

export default Game;
