import { SET_THEME } from "../types";
import { setLocalStorage } from "../../infra/localStorage";

export const setTheme = theme => {
  return dispatch => {
    dispatch({
      type: SET_THEME,
      payload: theme
    });

    setLocalStorage(SET_THEME, theme);
  };
};
