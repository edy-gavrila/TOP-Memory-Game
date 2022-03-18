import React from "react";

const defaultScore = {
  level: 1,
  score: 0,
  highScore: 0,
  gameState: "",
  itemsToDisplay: [],
  initGame: () => {},
  gameAction: () => {},
};

export const GameContext = React.createContext(defaultScore);
