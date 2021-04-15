import { connect } from "react-redux";

import { logOutUser } from "../../../../state/actions/auth";
import Component from "./Component";

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logOutUser())
  };
};

export default connect(null, mapDispatchToProps)(Component);
