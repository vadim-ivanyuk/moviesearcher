import * as types from './filters.types';

const initialState = {
  sort_by: 'popularity.desc',
  primary_release_year: `${new Date().getFullYear()}`,
  with_genres: [],
  page: 1,
  total_pages: 500,
  language: 'ru-RU',
  searchParams: '',
};

export const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ON_CHANGE_FILTERS:
      return { ...state, [payload.name]: payload.value };
    case types.SET_SEARCH_PARAMS:
      return { ...state, searchParams: payload };
    case types.SET_TOTAL_PAGES:
      return { ...state, total_pages: payload };
    case types.SET_FIRST_PAGE:
      return { ...state, page: 1 };
    default:
      return state;
  }
};
