import React from "react";
import PropTypes from "prop-types";
import { Card, Box, Flex } from "theme-ui";

import ScoreSection from "./components/ScoreSection";
import AnswerSection from "./components/AnswerSection";
import Avatar from "../Avatar";

const UserCard = ({ user }) => {
  const { name, questions, answers } = user;
  const answeredQuestions = Object.keys(answers).length;
  const createdQuestions = questions.length;
  const totalScore = answeredQuestions + createdQuestions;

  return (
    <Card sx={{ padding: 0 }}>
      <Flex
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          width: "100%"
        }}
      >
        <Box sx={{ padding: 3 }}>
          <Avatar name={name} />
        </Box>
        <AnswerSection
          name={name}
          answeredQuestions={answeredQuestions}
          createdQuestions={createdQuestions}
        />
        <ScoreSection totalScore={totalScore} />
      </Flex>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.string),
    answers: PropTypes.objectOf(PropTypes.string)
  }).isRequired
};

export default UserCard;
