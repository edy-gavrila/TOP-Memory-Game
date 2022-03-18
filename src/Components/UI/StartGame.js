import React, { useContext } from "react";
import { GameContext } from "../../Contexts/GameContext";
import Button from "./Button";

function StartGame() {
  const { initGame } = useContext(GameContext);
  return (
    <div className="w-full text-center mt-40">
      <h2 className="text-5xl mb-2">Memory Game</h2>
      <p className="mb-8">Press START to play!</p>
      <Button onClick={() => initGame()}>START</Button>
    
    </div>
  );
}

export default StartGame;
