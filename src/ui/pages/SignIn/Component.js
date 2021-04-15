import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Select, Label, Card, Box, Heading, Button } from "theme-ui";

import { useFetch } from "../../hooks/useFetch";

const NO_USER_SELECTED = "Select a user";

const SignIn = ({ users, fetchUsers, setAuthedUser, isLoggedIn }) => {
  let history = useHistory();
  const u = useFetch(users, fetchUsers);

  const [user, setUser] = useState(NO_USER_SELECTED);

  /* Fetch the users if state is empty of push to home page if already logge in */
  useEffect(() => {
    if (isLoggedIn) history.push("/home");
  }, []);

  /* Log in as the selected user and redirect to home page */
  const logInUser = () => {
    const cb = () => history.push("/home");

    setAuthedUser(user, cb);
  };

  /* Set the selected user in local state */
  const handleChange = e => {
    const { value } = e.target;

    setUser(value);
  };

  return (
    <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
      <Box
        sx={{
          margin: "auto",
          width: "40%",
          maxWidth: "360px",
          marginTop: "200px"
        }}
      >
        <Heading as="h3">SIGN IN</Heading>
        <Card>
          <Label htmlFor="users" as="h4">
            Select a user
          </Label>
          <br />
          <Select
            mb={3}
            name="users"
            id="users"
            onChange={handleChange}
            value={user}
          >
            <option disabled value={null}>
              Select a user
            </option>
            {Object.values(users).map(user => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </Select>
          <Button
            onClick={logInUser}
            disabled={user === NO_USER_SELECTED}
            sx={{ width: "100%" }}
          >
            Sign in
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

SignIn.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  fetchUsers: PropTypes.func.isRequired,
  usersFetched: PropTypes.bool.isRequired,
  setAuthedUser: PropTypes.func.isRequired
};

export default SignIn;
