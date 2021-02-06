import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "./auth/auth.reducers";
import { filtersReducer } from "./filters/filters.reducers";

const reducers = {
  auth: authReducer,
  filters: filtersReducer,
  form: formReducer,
};

export default combineReducers(reducers);
