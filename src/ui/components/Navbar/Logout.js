import React from "react";
import { connect } from "react-redux";

// const Logout = ({ isLoggedIn, logoutUser }) => {
//   // Don't show the logout button when no user is logged in
//   if (!isLoggedIn) return null;
//
//   return <div onClick={() => logoutUser()}>Logout</div>;
// };
//
// const mapStateToProps = ({ authedUser = {} }) => {
//   return {
//     isLoggedIn: authedUser.id ? true : false
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     logoutUser: () => console.log("logging out")
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Logout);
const Logout = () => <div>logout</div>;
export default Logout;
