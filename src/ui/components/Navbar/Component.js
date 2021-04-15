import React, { useEffect } from "react";
import { useThemeUI, Flex, Box } from "theme-ui";
import { useHistory } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";

import Loader from "../Loader";
import NavLinks from "./NavLinks/index";
import UserItem from "./UserItem";
import Logout from "./Logout";

const Navbar = ({
  children,
  authedUser,
  users,
  questions,
  fetchUsers,
  fetchQuestions,
  setAuthedUser
}) => {
  let history = useHistory();

  /* Fetch all required data and show loader if not fetched yet */
  const u = useFetch(users, fetchUsers);
  const q = useFetch(questions, fetchQuestions);
  const childComponent = u && q ? children : <Loader />;

  /* Set the authedUser */
  useEffect(() => {
    if (u && !authedUser) setAuthedUser();
  }, [u]);

  /* Direct user to signin page if no user is authenticated */
  useEffect(() => {
    if (!authedUser)
      history.push("/signin", { prevLocation: history.location.pathname });
  }, [authedUser]);

  const context = useThemeUI();
  const {
    theme: { colors }
  } = context;

  return (
    <Box>
      <Flex
        as="nav"
        sx={{
          position: "fixed",
          top: "0",
          width: "100%",
          background: colors.background,
          boxShadow: `0 8px 8px -8px rgba(0, 0, 0, 0.125)`
        }}
      >
        <Box sx={{ flex: "1 1 auto" }}>
          <NavLinks />
        </Box>
        <Box>
          <UserItem userFetched={u} />
        </Box>
        <Box>
          <Logout />
        </Box>
      </Flex>
      <Box sx={{ marginTop: "100px" }}>{childComponent}</Box>
    </Box>
  );
};

export default Navbar;
