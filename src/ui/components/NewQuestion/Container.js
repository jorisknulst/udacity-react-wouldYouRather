import { connect } from "react-redux";

// import fetchUsers from "../../../state/actions/users";
import Component from "./Component";
//
// const mapStateToProps = ({ users = [] }) => {
//   return {
//     users
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Component);
export default connect()(Component);
