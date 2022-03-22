import * as types from "./actionTypes";

export const getMovies = (payload) => {
  return {
    type: types.GET_MOVIES_LIST,
    payload,
  };
};

export const setMovies = (movies) => {
  return {
    type: types.SET_MOVIES_LIST,
    movies,
  };
};
