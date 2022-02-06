import React from "react";
import "./moviePoster.css";

const MoviePoster = ({ movie, togglePopup }) => {
    
  return (
    <>
      <img
        onClick={() => togglePopup(movie)}
        key={movie.id}
        className="row__poster"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
    </>
  );
};

export default MoviePoster;
