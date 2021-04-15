import React from "react";
import PropTypes from "prop-types";
import { Flex, Box, Heading, Badge } from "theme-ui";

const Result = ({ userCount, option, votedThisOption }) => {
  const { text, votes } = option;

  const ratio = votes.length / userCount;
  const percentage = ratio * 100;
  const rounded = percentage.toFixed(2);
  const roundedString = `${rounded}%`;

  return (
    <Box
      sx={{
        backgroundColor: votedThisOption ? "#e4faf8" : "#f9f7f9",
        border: `2px solid ${votedThisOption ? "#3ecda7" : "#dcdadc"}`,
        borderRadius: "5px",
        padding: 2,
        marginBottom: 3
      }}
    >
      {votedThisOption && (
        <Box
          sx={{
            position: "relative"
          }}
        >
          <Badge>
            Your
            <br />
            vote
          </Badge>
        </Box>
      )}
      <Heading
        as="h4"
        sx={{ marginBottom: 3 }}
      >{`Would you rather ${text}?`}</Heading>
      <Flex>
        {ratio > 0 && (
          <Flex
            sx={{
              width: `${roundedString}`,
              height: "50px",
              backgroundColor: "#3ecda7",
              color: "white",
              marginBottom: 2,
              alignItems: "center",
              justifyContent: "flex-end",
              padding: 1
            }}
          >{`${roundedString}`}</Flex>
        )}
        <Box
          sx={{
            width: `${100 - parseFloat(rounded)}%`,
            height: "50px",
            backgroundColor: "#dcdadc"
          }}
        />
      </Flex>
      <Box
        sx={{
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        {`${votes.length} out of ${userCount} votes`}
      </Box>
    </Box>
  );
};

Result.propTypes = {
  userCount: PropTypes.number.isRequired,
  votedThisOption: PropTypes.bool.isRequired,
  option: PropTypes.shape({
    text: PropTypes.string.isRequired,
    votes: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default Result;
