import { connect } from "react-redux";

import { fetchQuestions } from "../../../state/actions/questions";
import { fetchUsers } from "../../../state/actions/users";
import { setAuthedUser } from "../../../state/actions/auth";

import Component from "./Component";

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchUsers: () => dispatch(fetchUsers()),
    setAuthedUser: () => dispatch(setAuthedUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
