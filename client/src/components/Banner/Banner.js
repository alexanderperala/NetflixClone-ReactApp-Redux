import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchNetFlixOriginals}`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData(); 
  }, []);


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
    )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.name ? movie.name : movie.title }</h1>
        <div className="banner__buttons">
          <button className="play">Spela upp</button>
          <button className="info">Mer info</button>
        </div>
        <h3 className="banner__description">{movie.overview}</h3>
      </div>
    </header>
  );
};

export default Banner;
