import React from "react";
import PropTypes from "prop-types";
import { useThemeUI, Box, Button, Heading } from "theme-ui";
import { useHistory } from "react-router-dom";

import Wrapper from "../../components/Wrapper";

const PollNotFound = props => {
  let history = useHistory();

  const context = useThemeUI();
  const {
    theme: { colors }
  } = context;

  return (
    <Box sx={{ margin: "auto", width: "100%" }}>
      <Wrapper marginTop="20%">
        <Heading sx={{ marginBottom: 2 }}>This poll doesn't exist</Heading>
        <Button onClick={() => history.push("/home")}>Back to polls</Button>
      </Wrapper>
    </Box>
  );
};

PollNotFound.propTypes = {};

export default PollNotFound;
