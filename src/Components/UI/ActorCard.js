import React from "react";

function ActorCard({ imageSrc }) {
  return (
    <div className="cursor-pointer shadow-xl">
      <img src={imageSrc} alt="" className="rounded-md"></img>
    </div>
  );
}

export default ActorCard;
