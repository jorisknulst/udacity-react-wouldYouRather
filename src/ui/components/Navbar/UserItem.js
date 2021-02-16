import React from "react";
import { connect } from "react-redux";

const UserItem = ({ userName }) => {
  // Don't show the user name when no user is logged in
  if (!userName) return null;

  return <div>{`Hello, ${userName}`}</div>;
};

const mapStateToProps = state => {
  console.log(state);
  // const { name } = authedUser;
  // console.log(authedUser);
  return {
    // userName: name
  };
};

export default connect(mapStateToProps)(UserItem);
