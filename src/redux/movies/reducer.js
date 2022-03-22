import * as typeActions from "../movies/actionTypes";

const initialState = {
  movies: [],
  loading: false,
  error: "",
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.GET_MOVIES_LIST:
      return { ...state, loading: true };

    case typeActions.SET_MOVIES_LIST:
      return { ...state, movies: action.movies, loading: false };

    default:
      return { ...state };
  }
};

export default MovieReducer;
