import React, { useContext } from "react";
import { ScoreContext } from "../Contexts/ScoreContext";

function Header() {
  const { score, highScore, setHighScore, incrementScore, resetScore } =
    useContext(ScoreContext);
  return (
    <header className="w-full py-4 sm:px-4 bg-violet-800 text-white">
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl">Memo Card</h1>
        <div className="flex">
          <p className="mr-4">{`Score: ${score}`}</p>
          <p>{`High Score: ${highScore}`}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
