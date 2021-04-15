import React from "react";
import PropTypes from "prop-types";
import { useThemeUI, Avatar } from "theme-ui";

const AvatarSection = ({ name }) => {
  const context = useThemeUI();
  const {
    theme: { images }
  } = context;

  const firstName = name.split(" ")[0];
  const userName = firstName.charAt(0).toLowerCase() + firstName.slice(1);

  return <Avatar src={images[userName]} />;
};

AvatarSection.propTypes = {
  name: PropTypes.string.isRequired
};

export default AvatarSection;
