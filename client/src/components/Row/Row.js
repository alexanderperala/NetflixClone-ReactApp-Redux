import { useState, useEffect } from "react";
import axios from "../../axios";
import slugify from "react-slugify";
import styles from "./Row.module.css";
import MoviePoster from "../MoviePoster/MoviePoster";

const Row = ({ title, fetchUrl, togglePopup, mediaType }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      const result = request.data.results;

      for (const p of result) {
        if (p.name || p.title) {
          p.urlSlug = slugify(p.name || p.title);
        } else return p.id;

        if (!p.media_type) {
          p.media_type = mediaType;
        }
      }

      setMovies(result);
      return request;
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUrl]);

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.row__posters}>
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} togglePopup={togglePopup} />
        ))}
      </div>
    </div>
  );
};

export default Row;
