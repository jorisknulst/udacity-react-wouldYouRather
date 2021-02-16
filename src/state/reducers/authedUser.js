import { SET_AUTHED_USER } from "../types";

const initialState = null;

export default function authedUser(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTHED_USER: {
      return payload;
    }
    default:
      return state;
  }
}
