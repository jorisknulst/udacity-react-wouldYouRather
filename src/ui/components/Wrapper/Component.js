import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "theme-ui";

const Wrapper = ({ marginTop = "50px", children }) => {
  return (
    <Flex sx={{ width: "100%", alignItems: "center" }}>
      <Box
        sx={{
          width: "50%",
          maxWidth: "760px",
          margin: "auto",
          marginTop
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};

Wrapper.propTypes = {
  marginTop: PropTypes.string,
  children: PropTypes.node
};

export default Wrapper;
