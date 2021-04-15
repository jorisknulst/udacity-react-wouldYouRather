import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "../../infra/api";
import { fetchUsers } from "./users";
import { FETCH_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../types";

export const fetchQuestions = () => {
  return dispatch => {
    _getQuestions().then(questions => {
      dispatch({
        type: FETCH_QUESTIONS,
        payload: questions
      });
    });
  };
};

export const saveQuestion = (question, cb) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    _saveQuestion({ ...question, author: authedUser }).then(question => {
      dispatch({
        type: SAVE_QUESTION,
        payload: question
      });

      /* Since the user and questions models would have been updated with a real
      API connected we should fetch them again */
      dispatch(fetchUsers());
      dispatch(fetchQuestions());
      if (cb) cb();
    });
  };
};

export const saveQuestionAnswer = ({ id, answer }, cb) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    _saveQuestionAnswer({ authedUser, id, answer }).then(() => {
      dispatch({
        type: SAVE_QUESTION_ANSWER,
        payload: null
      });

      /* Since the user and questions models would have been updated with a real
      API connected we should fetch them again */
      dispatch(fetchUsers());
      dispatch(fetchQuestions());
      if (cb) cb();
    });
  };
};
