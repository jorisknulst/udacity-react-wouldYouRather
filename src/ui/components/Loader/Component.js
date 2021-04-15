import React from "react";
import { Spinner, Box } from "theme-ui";

import Wrapper from "../Wrapper";

const Loader = () => {
  return (
    <Wrapper marginTop="20%">
      <Box sx={{ textAlign: "center" }}>
        <Spinner />
      </Box>
    </Wrapper>
  );
};

export default Loader;
