import { createAction } from "redux-actions";
import * as types from "./filters.types";

export const onChangeFilters = createAction(
  types.ON_CHANGE_FILTERS,
  ({ name, value }) => ({
    name,
    value,
  })
);

export const resetFilters = createAction(types.RESET_FILTERS);
