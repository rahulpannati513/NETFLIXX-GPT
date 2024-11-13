import React from "react";
import MoviesCard from "./MoviesCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-3xl px-6 text-white --tw-text-opacity: 30; bg-opacity-85 ">
        {title}
      </h1>
      <div className="flex px-5 overflow-x-scroll">
        <div
          className=" flex 
         "
        >
          {movies?.map((movie) => (
            <MoviesCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
