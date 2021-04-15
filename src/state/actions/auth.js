import { SET_AUTHED_USER } from "../types";
import {
  setLocalStorage,
  removeLocalStorage,
  getLocalStorage
} from "../../infra/localStorage";

export const setAuthedUser = (id, cb) => {
  /* Check if a user id is stored in localStorage */
  const storedID = getLocalStorage(SET_AUTHED_USER);
  const userId = id || storedID;

  return (dispatch, getState) => {
    dispatch({
      type: SET_AUTHED_USER,
      payload: userId
    });

    setLocalStorage(SET_AUTHED_USER, userId);
    if (cb) cb();
  };
};

export const logOutUser = () => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_AUTHED_USER,
      payload: null
    });

    removeLocalStorage(SET_AUTHED_USER);
  };
};
