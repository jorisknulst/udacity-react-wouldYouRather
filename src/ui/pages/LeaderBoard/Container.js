import { connect } from "react-redux";

import Component from "./Component";

const mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions
  };
};

export default connect(mapStateToProps)(Component);
