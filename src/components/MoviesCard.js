import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = (posterPath) => {
  return (
    <div className="w-48 px-2">
      <img src={IMG_CDN_URL + posterPath?.posterPath} alt="Movie poster" />
    </div>
  );
};

export default MoviesCard;
