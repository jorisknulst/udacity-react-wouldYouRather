import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useThemeUI, Box, Flex, Heading } from "theme-ui";

import QuestionCard from "../../components/QuestionCard";
import Wrapper from "../../components/Wrapper";

const ANSWERED = "answered";
const UNANSWERED = "unanswered";

const Home = ({ users, authedUser, questions }) => {
  const context = useThemeUI();
  const {
    theme: { colors }
  } = context;

  /* Once questions are fetched a list with of the answered questions should be created */
  const setAnsweredQuestions = questions => {
    return Object.values(questions).filter(q => {
      return (
        q.optionOne.votes.includes(authedUser) ||
        q.optionTwo.votes.includes(authedUser)
      );
    });
  };

  /* Once questions are fetched a list with of the unanswered questions should be created */
  const setUnAnsweredQuestions = questions => {
    return Object.values(questions).filter(q => {
      return (
        !q.optionOne.votes.includes(authedUser) &&
        !q.optionTwo.votes.includes(authedUser)
      );
    });
  };

  /* Manage the selected type and list of questions */
  const [type, setType] = useState(UNANSWERED);
  const [list, setList] = useState([]);

  /* If the selected type or the questions somehow change, update the list accordingly */
  useEffect(() => {
    const list =
      type === ANSWERED
        ? setAnsweredQuestions(questions)
        : setUnAnsweredQuestions(questions);

    setList(list);
  }, [questions, type]);

  /* Create a card for each question */
  const questionCards = list.map(q => {
    return <QuestionCard key={q.id} question={q} />;
  });

  return (
    <Wrapper marginTop="0px">
      <Flex
        sx={{ margin: "auto", width: "80%", justifyContent: "space-between" }}
      >
        <Heading
          as="h2"
          sx={{
            color: type === ANSWERED ? "#07c" : colors.text,
            textDecoration: type === ANSWERED ? "underline" : "none",
            cursor: type !== ANSWERED ? "pointer" : "auto"
          }}
          onClick={() => setType(ANSWERED)}
        >
          Answered Polls
        </Heading>
        <Heading
          as="h2"
          sx={{
            color: type === UNANSWERED ? "#07c" : colors.text,
            textDecoration: type === UNANSWERED ? "underline" : "none",
            cursor: type !== UNANSWERED ? "pointer" : "auto"
          }}
          onClick={() => setType(UNANSWERED)}
        >
          Unanswered Polls
        </Heading>
      </Flex>
      {questionCards}
    </Wrapper>
  );
};

Home.propTypes = {
  questions: PropTypes.shape({
    optionOne: PropTypes.shape({
      votes: PropTypes.arrayOf(PropTypes.string)
    }),
    optionTwo: PropTypes.shape({
      votes: PropTypes.arrayOf(PropTypes.string)
    })
  }),
  authedUser: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.instanceOf(null)
  ])
};

export default Home;
