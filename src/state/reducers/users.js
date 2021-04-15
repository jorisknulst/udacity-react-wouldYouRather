import { FETCH_USERS } from "../types";

const initialState = {};

export default function users(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USERS: {
      return payload;
    }
    default:
      return state;
  }
}
