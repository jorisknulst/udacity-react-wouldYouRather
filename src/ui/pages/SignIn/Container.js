import { connect } from "react-redux";

import { setAuthedUser } from "../../../state/actions/auth";
import { fetchUsers } from "../../../state/actions/users";
import Component from "./Component";

const mapStateToProps = ({ users, authedUser }) => {
  const usersFetched = !!Object.keys(users).length;

  return {
    users,
    usersFetched,
    isLoggedIn: authedUser ? true : false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    setAuthedUser: (id, cb) => dispatch(setAuthedUser(id, cb))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
