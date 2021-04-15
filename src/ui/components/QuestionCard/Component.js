import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Button, Card, Box, Heading, Grid, Flex } from "theme-ui";

import Avatar from "../Avatar";

const QuestionCard = ({ author, question }) => {
  let history = useHistory();

  return (
    <Card sx={{ padding: 0 }}>
      <Grid columns={[1]} rows={[2]}>
        <Box bg="muted" sx={{ height: "5", padding: 3 }}>
          <Heading as="h4">{author} asks:</Heading>
        </Box>
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            width: "100%"
          }}
        >
          <Flex
            sx={{
              width: "50%",
              height: "100%",
              padding: 3,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              alignContent: "center"
            }}
          >
            <Avatar name={author} />
          </Flex>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              padding: 3,
              borderLeft: "1px solid grey"
            }}
          >
            <Heading as="h4">Would you rather</Heading>
            <p>{question.optionOne.text}</p>
            <p>or ...</p>
            <Button
              sx={{ width: "100%" }}
              onClick={() => history.push(`/questions/${question.id}`)}
            >
              View poll
            </Button>
          </Box>
        </Flex>
      </Grid>
    </Card>
  );
};

QuestionCard.propTypes = {
  author: PropTypes.string,
  question: PropTypes.shape({
    optionOne: PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default QuestionCard;
