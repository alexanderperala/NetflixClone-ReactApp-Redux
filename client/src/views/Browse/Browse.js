import { useState } from "react";
import Header from "../../components/Header-SignedIn/Header";
import Row from "../../components/Row/Row";
import requests from "../../requests";
import mediaType from "../../mediaTypes";
import Banner from "../../components/Banner/Banner";
import styles from "./Browse.module.css";
import MoviePopup from "../../components/MoviePopup/MoviePopup";
import axios from "axios";
import { getDetails, getRelatedMovies } from "../../redux/reducer";
import { useDispatch } from "react-redux";

const Browse = ({ onSearch, searchResult }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState([]);
  const [media, setMedia] = useState("");
  const [trailer, setTrailer] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  const dispatch = useDispatch();

  const togglePopup = async (movie) => {
    if (movie.id) {
      console.log("selectedMovie", movie);
      
      dispatch(getDetails(movie));
      dispatch(getRelatedMovies(movie));

      
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
    console.log(selectedMovie.media_type, response.data);
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
      <Header onSearch={onSearch} searchResult={searchResult} />
      <Banner />
      <div className={styles.movieContainer}>
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetFlixOriginals}
          togglePopup={togglePopup}
          mediaType={mediaType.TV}
        />
        <Row
          title="Populärt just nu"
          fetchUrl={requests.fetchTrending}
          togglePopup={togglePopup}
          mediaType={mediaType.ALL}
        />
        <Row
          title="Actionfilmer"
          fetchUrl={requests.fetchActionMovies}
          togglePopup={togglePopup}
          mediaType={mediaType.MOVIE}
        />
        <Row
          title="Populära serier"
          fetchUrl={requests.fetchTrendingTvShows}
          togglePopup={togglePopup}
          mediaType={mediaType.TV}
        />
        <Row
          title="Komedifilmer"
          fetchUrl={requests.fetchComedyMovies}
          togglePopup={togglePopup}
          mediaType={mediaType.MOVIE}
        />

        <Row
          title="Dokumentärfilmer"
          fetchUrl={requests.fetchDocumentariesMovies}
          togglePopup={togglePopup}
          mediaType={mediaType.MOVIE}
        />
        <Row
          title="Rysare"
          fetchUrl={requests.fetchHorrorMovies}
          togglePopup={togglePopup}
          mediaType={mediaType.MOVIE}
        />
        <Row
          title="Filmer med romantik"
          fetchUrl={requests.fetchRomanceMovies}
          togglePopup={togglePopup}
          mediaType={mediaType.MOVIE}
        />
      </div>
    </>
  );
};

export default Browse;
