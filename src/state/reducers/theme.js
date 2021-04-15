import { SET_THEME } from "../types";
import themes from "../../ui/themes";

const initialState = {};

export default function users(state = initialState, { type, payload }) {
  switch (type) {
    case SET_THEME: {
      return themes[payload];
    }
    default:
      return state;
  }
}
