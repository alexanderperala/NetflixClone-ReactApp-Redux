const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const requests = {
  // Movies
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // TV-Shows
  fetchTrendingTvShows: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTvShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMoviesTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMoviesTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMoviesTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMoviesTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesMoviesTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;