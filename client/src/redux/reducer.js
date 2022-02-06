import axios from "axios";

const initialState = {
  relatedMovies: [],
  movieDetails:[]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_RELATED_MOVIES": {
      const movies = action.payload.movies;

      const newState = { ...state };
      newState.relatedMovies = movies;
      
      return newState;
    }

    // case "GET_MOVIEDETAILS": {
    //   const details = action.payload.details;

    //   const newState = { ...state };
    //   newState.movieDetails = details;
      
    //   return newState;
    // }
    

    default:
      return state;
  }
}
export default reducer;

export function getRelatedMovies(selectedMovie) {
  return async function fetchRelatedMovies(dispatch, getState) {
    const relatedMovies = await axios.get(
      `https://api.themoviedb.org/3/${selectedMovie.media_type}/${selectedMovie.id}/similar?api_key=3dbc082ccec2412b516c4f602a5274bd&page=1?`
    );

    dispatch({
      type: "LOAD_RELATED_MOVIES",
      payload: { movies: relatedMovies.data.results },
    });
  };
}


export function getDetails(selectedMovie) {
  return async function fetchRelatedMovies(dispatch, getState) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${selectedMovie.media_type}/${selectedMovie.id}?api_key=3dbc082ccec2412b516c4f602a5274bd&append_to_response=videos`
    );

    dispatch({
      type: "GET_MOVIEDETAILS",
      payload: { details: response.data },
    });
  };
}
