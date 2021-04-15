import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";
import middleWare from "./middleware";
import { setAuthedUser } from "./actions/auth";
import { setTheme } from "./actions/theme";
import { getLocalStorage } from "../infra/localStorage";
import { SET_AUTHED_USER, SET_THEME } from "./types";

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, middleWare);

  /* Logged in user is stored in local storage and we log in that user on refresh */
  const loggedInUser = getLocalStorage(SET_AUTHED_USER);
  const loggedInUserID = loggedInUser ? loggedInUser : null;
  store.dispatch(setAuthedUser(loggedInUserID));

  /* Logged in user is stored in local storage and we log in that user on refresh */
  const userTheme = getLocalStorage(SET_THEME);
  store.dispatch(setTheme(userTheme || "plain"));

  return store;
};

export default configureStore({});
