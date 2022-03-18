import React, { useContext } from "react";

import { GameContext } from "../Contexts/GameContext";
import RunningGame from "./RunningGame";
import GameOver from "./UI/GameOver";
import StartGame from "./UI/StartGame";

function GameArea() {
  const gameState = useContext(GameContext);
  return (
    <div>
      {gameState.gameState === "initial" && <StartGame />}
      {gameState.gameState === "running" && <RunningGame />}
      {gameState.gameState === "over" && <GameOver />}
    </div>
  );
}

export default GameArea;
