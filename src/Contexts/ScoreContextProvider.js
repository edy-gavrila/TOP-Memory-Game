import React, { useState } from "react";
import { ScoreContext } from "./ScoreContext";

function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [curentHighScore, setCurrentHighScore] = useState(0);

  const incrementScore = () => setScore((prevScore) => prevScore + 1);
  const resetScore = () => setScore(0);
  const setHighScore = (score) => setCurrentHighScore(score);
  return (
    <ScoreContext.Provider
      value={{
        score,
        highScore: curentHighScore,
        incrementScore,
        resetScore,
        setHighScore,
      }}
    >
      {children};
    </ScoreContext.Provider>
  );
}

export default ScoreContextProvider;
