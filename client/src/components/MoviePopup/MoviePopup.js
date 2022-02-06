import React from "react";
import { motion } from "framer-motion";
import "./moviepopup.css";
import mediaType from "../../mediaTypes";
import YoutubeTrailer from "../Trailer/YoutubeTrailer";
import MovieDetails from "./MovieDetails/MovieDetails";
import { IoIosCloseCircle } from "react-icons/io";
import TvShowDetails from "./TvShowDetails/TvShowDetails";
import SimilarMovies from "./SimilarMovies/SimilarMovies";
import { useSelector } from "react-redux";

const MoviePopup = ({ handleClose, movie, trailer, showTrailer, media }) => {
  console.log("popupMovie", movie);

  const details = useSelector((state) => state.movieDetails);
  console.log("REDUX-details", details);

  let initialSettings = { opacity: 0 };
  let animateSettings = { opacity: 1 };
  let transitionSettings = { ease: "easeInOut", duration: 0.2, delay: 0.0 };

  return (
    <motion.div
      initial={initialSettings} 
      animate={animateSettings}
      transition={transitionSettings}
      className="popup-box"
    >
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          <IoIosCloseCircle />
        </span>
        {showTrailer ? (
          <YoutubeTrailer trailer={trailer} />
        ) : (
          <div className="movie__container">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.name}
            />
            <div className="trailer-message">Ingen förhandsvisning</div>
          </div>
        )}
        {media === mediaType.MOVIE ? (
          <MovieDetails movie={movie} />
        ) : (
          <TvShowDetails movie={movie} />
        )}
        <SimilarMovies />
      </div>
    </motion.div>
  );
};

export default MoviePopup;
