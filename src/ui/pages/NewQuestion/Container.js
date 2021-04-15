import { connect } from "react-redux";

import { saveQuestion } from "../../../state/actions/questions";
import Component from "./Component";

const mapDispatchToProps = dispatch => {
  return {
    saveQuestion: (question, cb) => dispatch(saveQuestion(question, cb))
  };
};

export default connect(null, mapDispatchToProps)(Component);
