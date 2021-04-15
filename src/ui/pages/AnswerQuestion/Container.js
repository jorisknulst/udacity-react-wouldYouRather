import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { saveQuestionAnswer } from "../../../state/actions/questions";
import Component from "./Component";

const mapStateToProps = ({ authedUser, users, questions }, { match }) => {
  /* Get the question from the url param */
  const questionId = match.params.id;
  const { id, optionOne, optionTwo, author } = questions[questionId];

  /* Get the name of the creator of the question */
  const user = Object.values(users).find(user => user.id === author);
  const authorName = user && user.name;

  /* Check the vote of the authedUser */
  const votedOptionOne = optionOne && optionOne.votes.includes(authedUser);
  const votedOptionTwo = optionTwo && optionTwo.votes.includes(authedUser);

  const myVote =
    votedOptionOne || votedOptionTwo
      ? votedOptionOne
        ? "optionOne"
        : "optionTwo"
      : null;

  return {
    id,
    optionOne,
    optionTwo,
    authorName,
    myVote
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveQuestionAnswer: ({ id, answer }, cb) =>
      dispatch(saveQuestionAnswer({ id, answer }, cb))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Component)
);
