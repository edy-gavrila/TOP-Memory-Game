import React from "react";

const defaultScore = {
  score: 0,
  highScore: 0,
  incrementScore: () => {},
  resetScore: () => {},
  setHighScore: 0,
};

export const ScoreContext = React.createContext(defaultScore);
