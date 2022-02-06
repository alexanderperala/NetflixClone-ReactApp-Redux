import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./similarmovies.css";
import { useSelector } from "react-redux";

const SimilarMovies = () => {
  const movies = useSelector((state) => state.relatedMovies);
  console.log("REDUX-relatedmovies", movies);

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 4,
    gap: 10,
  };

  return (
    <div className="sliderConteriner">
      <h3>Liknande titlar</h3>
      <Slider {...settings}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SimilarMovies;
