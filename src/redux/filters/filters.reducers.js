import { handleActions } from "redux-actions";

const initialState = {
  sort_by: "popularity.desc",
  primary_release_year: new Date().getFullYear(),
  with_genres: [],
  page: 1,
  total_pages: 500,
  language: "ru-RU",
};

export const filtersReducer = handleActions(
  {
    ON_CHANGE_FILTERS: (store, { payload }) => ({
      ...store,
      [payload.name]: payload.value,
    }),
    RESET_FILTERS: (store) => (store = initialState),
  },
  initialState
);
