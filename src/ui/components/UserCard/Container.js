import { connect } from "react-redux";
import Component from "./Component";

const mapStateToProps = ({ users }, { userId }) => {
  return {
    user: users[userId]
  };
};

export default connect(mapStateToProps)(Component);
