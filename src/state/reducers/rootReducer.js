import { combineReducers } from "redux";

import { routerReducer as router } from "react-router-redux";
import authedUser from "./authedUser";
import theme from "./theme";
import users from "./users";
import questions from "./questions";

const rootReducer = combineReducers({
  router,
  authedUser,
  theme,
  users,
  questions
});

export default rootReducer;
