import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "./auth";
import { errorsReducer } from "./errors";
import { filtersReducer } from "./filters";

const reducers = {
  auth: authReducer,
  filters: filtersReducer,
  errors: errorsReducer,
  form: formReducer,
};

export default combineReducers(reducers);
