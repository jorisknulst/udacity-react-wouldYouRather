import React from "react";
import PropTypes from "prop-types";
import { useThemeUI, Box, Button, Heading } from "theme-ui";
import { useHistory } from "react-router-dom";

import Wrapper from "../../components/Wrapper";

const NotFound = props => {
  let history = useHistory();

  const context = useThemeUI();
  const {
    theme: { colors }
  } = context;

  return (
    <Box sx={{ margin: "auto", width: "100%" }}>
      <Wrapper marginTop="20%">
        <Heading>This page doesn't exist</Heading>
        <Button onClick={() => history.push("/home")}>To Home page</Button>
      </Wrapper>
    </Box>
  );
};

NotFound.propTypes = {};

export default NotFound;
