import { FETCH_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../types";

const initialState = {};

export default function questions(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_QUESTIONS: {
      return payload;
    }
    case SAVE_QUESTION: {
      return state;
    }
    case SAVE_QUESTION_ANSWER: {
      return state;
    }
    default:
      return state;
  }
}
