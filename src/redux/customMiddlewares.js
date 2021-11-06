import { ON_CHANGE_FILTERS } from './filters/filters.types';
import { GET_MOVIES, SEARCHING_MOVIES } from './movies/movies.types';
import { getMovies, searchingMovies } from './movies/movies.thunks';

export const onChangePageMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    let currentPage = getState().filters.page;
    if (
      action.type === ON_CHANGE_FILTERS &&
      action.payload.name !== 'page' &&
      currentPage !== 1
    ) {
      dispatch({
        type: ON_CHANGE_FILTERS,
        payload: {
          name: 'page',
          value: 1,
        },
      });
    }

    return next(action);
  };

export const getMoviesWithChangedFilters =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ON_CHANGE_FILTERS) {
      const { filters } = getState();

      if (filters.searchParams) {
        dispatch(searchingMovies(filters.searchParams));
      } else {
        dispatch(getMovies());
      }
    }
  };
