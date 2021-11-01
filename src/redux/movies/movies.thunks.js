import axios from 'axios';
import queryString from 'query-string';

import { getMoviesAction, searchingMoviesAction } from './movies.actions';

import { API_URL, API_KEY_MOVIE_DB_V3 } from '../../utils/apies';

export const getMovies = () => (dispatch, getState) => {
  const { filters } = getState();

  const params = {
    api_key: API_KEY_MOVIE_DB_V3,
    language: filters.language,
    sort_by: filters.sort_by,
    primary_release_year: filters.primary_release_year,
    with_genres: filters.with_genres,
    page: filters.page,
  };

  axios
    .get(`${API_URL}/discover/movie?${queryString.stringify(params)}`)
    .then(({ data }) => {
      dispatch(getMoviesAction(data.results));
    })
    .catch((error) => console.log(error));
};

export const searchingMovies = (searchParams) => (dispatch, getState) => {
  const { filters } = getState();

  const params = {
    api_key: API_KEY_MOVIE_DB_V3,
    language: filters.language,
    query: String(searchParams),
  };

  if (!searchParams.length) {
      dispatch(getMovies())
  } else {
    axios
      .get(`${API_URL}/search/movie?${queryString.stringify(params)}`)
      .then(({ data }) => {
        dispatch(searchingMoviesAction(data.results));
      })
      .catch((error) => console.log(error));
  }
};
