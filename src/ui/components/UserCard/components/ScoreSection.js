import React from "react";
import PropTypes from "prop-types";
import { Card, Heading, Box } from "theme-ui";

const ScoreSection = ({ totalScore }) => {
  return (
    <Box sx={{ padding: 3, borderLeft: "1px solid grey" }}>
      <Card sx={{ padding: 0, width: "40px" }}>
        <Box bg="muted" sx={{ padding: 3 }}>
          <Heading as="h3">Score</Heading>
        </Box>
        <Box sx={{ padding: 3 }}>
          <Box
            sx={{
              padding: 2,
              background: "steelblue",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              textAlign: "center"
            }}
          >
            <Heading as="h3">{totalScore}</Heading>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

ScoreSection.propTypes = {
  totalScore: PropTypes.number.isRequired
};

export default ScoreSection;
