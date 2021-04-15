import React from "react";
import PropTypes from "prop-types";
import { Flex, Heading, Box } from "theme-ui";

const AnswerSection = ({ name, answeredQuestions, createdQuestions }) => {
  return (
    <Box sx={{ padding: 3, borderLeft: "1px solid grey", width: "50%" }}>
      <Heading as="h3">{name}</Heading>
      <br />
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent: "center",
          width: "100%"
        }}
      >
        <Box>Answered Questions:</Box>
        <Box> {answeredQuestions}</Box>
      </Flex>
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent: "center",
          width: "100%"
        }}
      >
        <Box>Created Questions:</Box>
        <Box> {createdQuestions}</Box>
      </Flex>
    </Box>
  );
};

AnswerSection.propTypes = {
  name: PropTypes.string.isRequired,
  createdQuestions: PropTypes.number.isRequired,
  answeredQuestions: PropTypes.number.isRequired
};

export default AnswerSection;
