import React, { Component } from "react";
import "./Game.css";
import Player from "../Player/Player";
import RollDice from "../RollDice/RollDice";
import HoldButton from "../Buttons/HoldButton";
import ResetButton from "../Buttons/ResetButton";
import ScoreGoalInput from "../ScoreGoalInput/ScoreGoalInput";

class Game extends Component {
  state = {
    totalScore1: 0,
    totalScore2: 0,
    scoreGoal: 100,
    currentDiceRollSum: 0,
    playerTurn: [true, false],
  };

  updateCurrentDiceRollSum = (newSum) => {
    if (newSum === 12) {
      this.handleDoubleSix();
    } else {
      this.setState((prev) => {
        return {
          currentDiceRollSum:
            newSum === 0 ? 0 : prev.currentDiceRollSum + newSum,
        };
      });
    }
  };

  updateTotalScore = () => {
    this.setState((prev) => {
      return this.state.playerTurn[0]
        ? { totalScore1: prev.totalScore1 + prev.currentDiceRollSum }
        : { totalScore2: prev.totalScore2 + prev.currentDiceRollSum };
    });
  };

  changeTurn = () => {
    this.setState((prev) => {
      return { playerTurn: [!prev.playerTurn[0], !prev.playerTurn[1]] };
    });
  };

  updateScoreGoal = (newScoreGoal) => {
    this.setState({ scoreGoal: newScoreGoal });
  };

  handleDoubleSix = () => {
    this.updateCurrentDiceRollSum(0);
    this.changeTurn();
  };

  // checkWinner = () => {};

  render() {
    return (
      <div className="game-container">
        <Player
          name="PLAYER 1"
          totalScore={this.state.totalScore1}
          currentScore={this.state.currentDiceRollSum}
          isMyTurn={this.state.playerTurn[0]}
        />
        <div className="game-dashboard">
          <ResetButton />
          <RollDice updateCurrentSum={this.updateCurrentDiceRollSum} />
          <HoldButton
            updateCurrentSum={this.updateCurrentDiceRollSum}
            updateTotalScore={this.updateTotalScore}
            changeTurn={this.changeTurn}
          />
          <ScoreGoalInput onInputChange={this.updateScoreGoal} />
        </div>
        <Player
          name="PLAYER 2"
          totalScore={this.state.totalScore2}
          currentScore={this.state.currentDiceRollSum}
          isMyTurn={this.state.playerTurn[1]}
        />
      </div>
    );
  }
}

export default Game;
