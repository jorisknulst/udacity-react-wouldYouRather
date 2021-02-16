import { connect } from "react-redux";

import { fetchUsers } from "../../../state/actions/users";
import { setAuthedUser } from "../../../state/actions/auth";
import Component from "./Component";

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    setAuthedUser: id => dispatch(setAuthedUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
