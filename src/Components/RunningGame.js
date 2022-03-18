import React, { useContext } from "react";
import { GameContext } from "../Contexts/GameContext";
import ActorCard from "./UI/ActorCard";

const skillLevels = [
  "",
  "novice",
  "intermediate",
  "proficient",
  "expert",
  "living god",
];

function RunningGame() {
  const { itemsToDisplay, level } = useContext(GameContext);
  let cards;
  if (itemsToDisplay) {
    cards = itemsToDisplay.map((item) => (
      <ActorCard key={item} imageSrc={item} />
    ));
  }
  return (
    <div className="text-center">
      <h2 className="mt-10 text-3xl">
        Click a card you have never clicked before!
      </h2>
      <h3 className="text-lg">
        Current level: {level} - {skillLevels[level]}
      </h3>
      <div className="flex flex-wrap gap-4 mt-16 justify-center">{cards}</div>
    </div>
  );
}

export default RunningGame;
