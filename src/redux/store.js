import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { ON_CHANGE_FILTERS } from "./filters/filters.types";

let currentPage;

const onChangePageMiddleware = ({ dispatch, getState }) => (next) => (
  action
) => {
  currentPage = getState().filters.page;
  if (
    action.type === ON_CHANGE_FILTERS &&
    action.payload.name !== "page" &&
    currentPage !== 1
  ) {
    dispatch({
      type: ON_CHANGE_FILTERS,
      payload: {
        name: "page",
        value: 1,
      },
    });
  }

  return next(action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, onChangePageMiddleware))
);

export default store;
