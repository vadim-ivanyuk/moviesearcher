import { handleActions } from "redux-actions";
import { cookies } from "../../utils/cookies";

const initialState = {
  user: {
    favouriteMovies: [],
    watchList: [],
  },
  isAuth: false,
  session_id: cookies.get("session_id") || null,
};

export const authReducer = handleActions(
  {
    UPDATE_AUTH: (state) => {
      return { ...state };
    },
  },
  initialState
);
