import React, { useEffect, useState } from "react";
import { createNewGame } from "../APIs/game";
import { GameContext } from "./GameContext";

function GameContextProvider({ children }) {
  const game = useState(createNewGame())[0];
  const [gameState, setGameState] = useState();

  useEffect(() => {
    if (game) {
      setGameState({
        level: game.getLevel(),
        score: game.getScore(),
        highScore: game.getHighScore(),
        gameState: game.getGameState(),
        itemsToDisplay: game.getItemsToDisplay(),
      });
      game.subscribe(updateGameState);
    }
  }, [game]);

  const updateGameState = (newState) => {
    setGameState((prevState) => ({
      ...prevState,
      level: newState.level,
      score: newState.score,
      highScore: newState.highScore,
      itemsToDisplay: newState.itemsToDisplay,
      gameState: newState.gameState,
    }));
  };

  return (
    <GameContext.Provider
      value={{
        ...gameState,
        initGame: game.initGame,
        gameAction: game.gameAction,
      }}
    >
      {children};
    </GameContext.Provider>
  );
}

export default GameContextProvider;
