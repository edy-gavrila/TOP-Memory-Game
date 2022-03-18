import React, { useContext } from "react";
import { GameContext } from "../../Contexts/GameContext";
import Button from "./Button";

function GameOver() {
  const { initGame } = useContext(GameContext);
  return (
    <div className="text-center mt-40">
      <h2 className="text-5xl mb-4">Game Over!</h2>
      <Button onClick={initGame}>PLAY AGAIN</Button>
    </div>
  );
}

export default GameOver;
