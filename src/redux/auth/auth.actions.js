import { createAction } from "redux-actions";
import * as types from "./auth.types";

export const updateAuth = createAction(types.UPDATE_AUTH);
