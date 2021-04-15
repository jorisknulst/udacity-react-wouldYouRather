import { connect } from "react-redux";

import Component from "./Component";

const mapStateToProps = ({ authedUser, users }, { userFetched }) => {
  const userName = userFetched && authedUser ? users[authedUser].name : null;

  return {
    userName
  };
};

export default connect(mapStateToProps)(Component);
