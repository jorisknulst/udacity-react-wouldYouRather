import React from "react";
import PropTypes from "prop-types";
import { useThemeUI, NavLink } from "theme-ui";

const Logout = ({ logoutUser }) => {
  const context = useThemeUI();
  const {
    theme: { styles }
  } = context;

  return (
    <NavLink sx={styles.h3} p={2} onClick={logoutUser} href="">
      Logout
    </NavLink>
  );
};

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default Logout;
