import React, { useEffect, useState } from "react";
import { getActorPictureList } from "../APIs/tmdb";
import ActorCard from "./UI/ActorCard";

function GameArea() {
  const [actorPictureList, setActorsPictureList] = useState([]);
  useEffect(() => {
    const getActorPictureListFromTmdb = async (page = 1) => {
      try {
        const data = await getActorPictureList(page);
        setActorsPictureList(data);
      } catch (error) {
        console.error(error);
      }
    };

    getActorPictureListFromTmdb(1);
  }, []);

  const pictureCards = actorPictureList.map((picture) => {
    return <ActorCard key={picture} imageSrc={picture} />;
  });
  return <div className="flex flex-wrap gap-2 p-4">{pictureCards}</div>;
}

export default GameArea;
