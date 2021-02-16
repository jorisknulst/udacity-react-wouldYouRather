import { SET_AUTHED_USER } from "../types";

export const setAuthedUser = id => {
  return (dispatch, getState) => {
    const authedUser = getState().users[id];

    dispatch({
      type: SET_AUTHED_USER,
      payload: authedUser
    });
  };
};
