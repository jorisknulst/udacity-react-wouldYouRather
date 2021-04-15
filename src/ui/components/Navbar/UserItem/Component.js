import React from "react";
import PropTypes from "prop-types";
import { useThemeUI, NavLink, Avatar } from "theme-ui";

// <Avatar src={images.logo} />

const UserItem = ({ userName }) => {
  const context = useThemeUI();
  const {
    theme: { styles }
  } = context;

  // Don't show the user name when no user is logged in
  if (!userName) return null;

  // <Avatar />

  return (
    <NavLink sx={styles.h3} p={2}>
      {`Hello, ${userName}`}
    </NavLink>
  );
};

UserItem.propTypes = {
  userName: PropTypes.string
};

export default UserItem;
