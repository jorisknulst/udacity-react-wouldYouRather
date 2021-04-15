import { connect } from "react-redux";

import Component from "./Component";

const mapStateToProps = ({ authedUser, users, questions }, { questionId }) => {
  const userCount = Object.values(users).length;
  const question = questions[questionId];

  return {
    userCount,
    question
  };
};

export default connect(mapStateToProps)(Component);
