import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Box, Grid, Flex, Heading } from "theme-ui";

import Wrapper from "../../components/Wrapper";
import Avatar from "../../components/Avatar";
import Question from "./Question";
import Result from "./Result";

const AnswerQuestion = ({
  id,
  optionOne = {},
  optionTwo = {},
  authorName,
  myVote,
  saveQuestionAnswer
}) => {
  const [answer, setAnswer] = useState(myVote);
  const [answered, setAnswered] = useState(false);

  const handleChange = ({ target: { name } }) => {
    setAnswer(name);
  };

  const submit = e => {
    /* Application logic to direct the user to the home page after
    successfully saving the answer */
    const cb = () => setAnswered(true);
    saveQuestionAnswer({ id, answer }, cb);
  };

  const questionSection = (
    <Question
      handleChange={handleChange}
      answer={answer}
      submit={submit}
      optionOne={optionOne}
      optionTwo={optionTwo}
    />
  );

  const resultSection = <Result questionId={id} myVote={myVote} />;

  return (
    <Wrapper marginTop="0px">
      <Card sx={{ padding: 0 }}>
        <Grid columns={[1]} rows={[2]}>
          <Box bg="muted" sx={{ height: "5", padding: 3 }}>
            <Heading as="h4">{authorName} asks:</Heading>
          </Box>
          <Flex
            sx={{
              flexDirection: "row",
              width: "100%",
              height: "100%"
            }}
          >
            <Flex
              sx={{
                width: "40%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid grey"
              }}
            >
              <Avatar name={authorName} />
            </Flex>
            <Box
              sx={{
                width: "50%",
                height: "100%",
                padding: 3
              }}
            >
              {answered ? resultSection : questionSection}
            </Box>
          </Flex>
        </Grid>
      </Card>
    </Wrapper>
  );
};

AnswerQuestion.propTypes = {
  id: PropTypes.string,
  optionOne: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  optionTwo: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  authorName: PropTypes.string,
  myVote: PropTypes.string,
  saveQuestionAnswer: PropTypes.func.isRequired
};

export default AnswerQuestion;
