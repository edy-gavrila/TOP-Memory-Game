import React, { useContext } from "react";
import { GameContext } from "../../Contexts/GameContext";

function ActorCard({ imageSrc }) {
  const { gameAction } = useContext(GameContext);
  return (
    <div
      className="cursor-pointer shadow-xl animate-fadein  rounded p-2 bg-indigo-800 hover:bg-yellow-600 transition-transform active:scale-90"
      onClick={() => gameAction(imageSrc)}
    >
      <img src={imageSrc} alt="" className=""></img>
    </div>
  );
}

export default ActorCard;
