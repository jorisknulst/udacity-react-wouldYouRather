import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const SignIn = ({ users, fetchUsers, setAuthedUser, history }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const logInUser = ({ target }) => {
    setAuthedUser(target.value);
    history.push("/home");
  };

  const usersFetched = Object.keys(users).length !== 0;

  return (
    <select name="users" id="users" onChange={e => logInUser(e)}>
      {usersFetched &&
        Object.values(users).map(user => {
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
    </select>
  );
};

export default withRouter(SignIn);
