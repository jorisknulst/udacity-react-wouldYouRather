import React from "react";
import PropTypes from "prop-types";

import UserCard from "../../components/UserCard";
import Wrapper from "../../components/Wrapper";

const LeaderBoard = ({ users, questions }) => {
  /* Create cards for each user */
  const userCards = Object.values(users)
    .sort((a, b) => {
      const totalScoreA = Object.keys(a.answers).length + a.questions.length;
      const totalScoreB = Object.keys(b.answers).length + b.questions.length;

      return totalScoreB - totalScoreA;
    })
    .map(user => {
      return <UserCard key={user.id} userId={user.id} />;
    });

  return <Wrapper marginTop="0px">{userCards}</Wrapper>;
};

LeaderBoard.propTypes = {
  users: PropTypes.shape({
    answers: PropTypes.object,
    questions: PropTypes.arrayOf(PropTypes.object)
  }),
  questions: PropTypes.objectOf(PropTypes.object)
};

export default LeaderBoard;
