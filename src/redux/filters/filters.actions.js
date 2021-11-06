import * as types from './filters.types';

export const onChangeFilters = ({ name, value }) => ({
  type: types.ON_CHANGE_FILTERS,
  payload: {
    name,
    value,
  },
});

export const setSearchParams = (searchParams = '') => ({
  type: types.SET_SEARCH_PARAMS,
  payload: searchParams,
});

export const setTotalPages = (totalPages) => ({
  type: types.SET_TOTAL_PAGES,
  payload: totalPages,
});

export const setFirstPage = () => ({
  type: types.SET_FIRST_PAGE,
});
