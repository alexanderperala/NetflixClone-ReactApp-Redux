import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { MdOutlineHighQuality } from "react-icons/md";
import "./moviedetails.css";

const MovieDetails = ({ movie }) => {

    const time = (movie.runtime / 60).toString();
    let string = time.substring(0, 4).split(".");
    let movieRunTime =`${string[0]} t ${string[1]} min`;

    const year = movie.release_date.substring(0, 4);

  return (
    <div className="movie__detailsContainer">
      <div className="movie__titleContainer">
        {movie.title ? <h2>{movie.title}</h2> : <h2>{movie.name}</h2>}
        <div className="iconsContainer">
          <div className="svgIcon">
            <AiOutlinePlusCircle />
          </div>
          <div className="svgIcon">
            <BsHandThumbsUp />
          </div>
          <div className="svgIcon">
            <BsHandThumbsDown />
          </div>
        </div>
      </div>
      <div className="movie__yearAndTime">
        <p>{year}</p>
        <p className="movie__titleIcon">{movieRunTime}</p>
        <MdOutlineHighQuality />
      </div>
      <div className="movie__details">
        <p>{movie.overview}</p>
        <div className="movie_ganreWrapper">
          <p>Genrer:</p>
          {movie.genres.map((genre) => (
            <p key={genre.id} className="movie__genre">
              {genre.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
