import { connect } from "react-redux";

import Component from "./Component";

const mapStateToProps = ({ users, questions, authedUser }) => {
  return {
    questions,
    users,
    authedUser
  };
};

export default connect(mapStateToProps)(Component);
