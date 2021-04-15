import { connect } from "react-redux";

import { saveQuestion } from "../../../state/actions/questions";
import Component from "./Component";

const mapStateToProps = ({ users }, { question }) => {
  const user = Object.values(users).find(user => user.id === question.author);
  const { name } = user;

  return {
    author: name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveQuestion: () => dispatch(saveQuestion())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
