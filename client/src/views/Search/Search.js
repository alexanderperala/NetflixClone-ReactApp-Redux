import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header-SignedIn/Header";
import "./Search.css";
import MoviePopup from "../../components/MoviePopup/MoviePopup";
import MoviePoster from "../../components/MoviePoster/MoviePoster";

const Search = ({ data, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState([]);
  const [media, setMedia] = useState("");
  const [trailer, setTrailer] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  const togglePopup = async (movie) => {
    if (movie.id) {
      console.log("selectedMovie", movie);
      await fetchMovieDetails(movie);
      setIsOpen(!isOpen);
    } else {
      setMovie([]);
      setIsOpen(!isOpen);
    }

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const fetchMovieDetails = async (selectedMovie) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${selectedMovie.media_type}/${selectedMovie.id}?api_key=3dbc082ccec2412b516c4f602a5274bd&append_to_response=videos`
    );
    setMovie(response.data);
    setMedia(selectedMovie.media_type);
    checkForTrailer(response.data);
    console.log(selectedMovie.mediaType, response.data);
  };

  const checkForTrailer = (movie) => {
    setTrailer([]);
    setShowTrailer(false);

    const videos = movie.videos.results;
    if (videos.length > 0) {
      const video = videos.find((x) => x.type === "Trailer");

      if (video) {
        setTrailer(video);
        console.log("setTrailer");
        setShowTrailer(true);
        console.log("setShowTraier");
      }
    } else {
      setShowTrailer(false);
    }
  };

  return (
    <>
      {isOpen && (
        <MoviePopup
          media={media}
          handleClose={togglePopup}
          movie={movie}
          trailer={trailer}
          showTrailer={showTrailer}
        />
      )}

      <Header onSearch={onSearch} searchResult={data} />
      <div className="searchContainer">
        <div className="searchResult">
          {data.map((movie) => (
            <div key={movie.id} className="movie">
              <MoviePoster movie={movie} togglePopup={togglePopup} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
