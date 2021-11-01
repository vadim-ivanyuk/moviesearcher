import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import {
  onChangePageMiddleware,
  getMoviesWithChangedFilters,
} from './customMiddlewares';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, onChangePageMiddleware, getMoviesWithChangedFilters)
  )
);

export default store;
