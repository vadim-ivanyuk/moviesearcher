import * as types from './movies.types';

export const getMoviesAction = (movies) => ({
  type: types.GET_MOVIES,
  payload: movies,
});

export const searchingMoviesAction = (movies) => ({
  type: types.FOUNDED_MOVIES,
  payload: movies,
});
