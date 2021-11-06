import * as types from './movies.types';

const initialState = {
  activeMovie: [],
  activeMovies: [],
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MOVIES:
      return { ...state, activeMovies: payload };
    case types.SEARCHING_MOVIES:
      return { ...state, activeMovies: payload };
    default:
      return state;
  }
};
