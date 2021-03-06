import React, { Fragment } from "react";
import { useThemeUI, NavLink } from "theme-ui";
import { useRouteMatch, Link } from "react-router-dom";

const NavLinks = () => {
  const context = useThemeUI();
  const {
    theme: { styles, colors }
  } = context;

  const CustomNavLink = ({ route, text }) => {
    let sx = styles.h3;
    let match = useRouteMatch(route);
    if (match)
      sx = { ...sx, textDecoration: "underline", color: colors.primary };

    return (
      <NavLink p={2} sx={sx}>
        <Link to={route}>{text}</Link>
      </NavLink>
    );
  };

  return (
    <Fragment>
      <CustomNavLink route="/home" text="Home" />
      <CustomNavLink route="/add" text="New Question" />
      <CustomNavLink route="/leaderboard" text="Leader board" />
    </Fragment>
  );
};

export default NavLinks;
