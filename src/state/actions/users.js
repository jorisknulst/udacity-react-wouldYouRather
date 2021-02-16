import { _getUsers } from "../../infra/api";
import { FETCH_USERS } from "../types";

export const fetchUsers = () => {
  return dispatch => {
    _getUsers().then(users => {
      dispatch({
        type: FETCH_USERS,
        payload: users
      });
    });
  };
};
