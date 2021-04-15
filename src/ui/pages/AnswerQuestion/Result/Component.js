import React from "react";
import PropTypes from "prop-types";
import { Flex, Heading } from "theme-ui";

import OptionCard from "./OptionCard";

const Result = ({ userCount, question, myVote }) => {
  const { optionOne, optionTwo } = question;

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Heading sx={{ marginBottom: 2 }}>Results:</Heading>
      <OptionCard
        option={optionOne}
        userCount={userCount}
        votedThisOption={myVote === "optionOne"}
      />
      <OptionCard
        option={optionTwo}
        userCount={userCount}
        votedThisOption={myVote === "optionTwo"}
      />
    </Flex>
  );
};

Result.propTypes = {
  userCount: PropTypes.number.isRequired,
  myVote: PropTypes.string,
  question: PropTypes.shape({
    optionTwo: PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  }).isRequired
};

export default Result;
