import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { MdOutlineHighQuality } from "react-icons/md";
import "./tvshowdetails.css";

const TvShowDetails = ({ movie }) => {
  let seasons = "säsong";

  if (movie.number_of_seasons > 1) seasons = `säsonger`;

  const year = movie.first_air_date.substring(0, 4);

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
        <p>{`${movie.number_of_seasons} ${seasons}`}</p>
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

export default TvShowDetails;
