import { combineReducers } from "redux";

import authedUser from "./authedUser";
import users from "./users";

const rootReducer = combineReducers({
  authedUser,
  users
});

export default rootReducer;
