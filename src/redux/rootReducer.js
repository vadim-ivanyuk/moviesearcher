import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth';
import { errorsReducer } from './errors';
import { filtersReducer } from './filters';
import { moviesReducer } from './movies';

const reducers = {
  auth: authReducer,
  filters: filtersReducer,
  movies: moviesReducer,
  errors: errorsReducer,
  form: formReducer,
};

export default combineReducers(reducers);
