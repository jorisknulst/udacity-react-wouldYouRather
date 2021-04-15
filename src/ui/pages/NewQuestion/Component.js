import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Card, Input, Button, Heading, Divider, Flex } from "theme-ui";

const NewQuestion = ({ saveQuestion }) => {
  let history = useHistory();

  const [question, setQuestion] = useState({
    optionOneText: "",
    optionTwoText: ""
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setQuestion({ ...question, [name]: value });
  };

  const submit = e => {
    e.preventDefault();

    /* Application logic to direct the user to the home page after
    successfully saving the question */
    const cb = () => history.push("/home");
    saveQuestion(question, cb);
  };

  return (
    <Flex sx={{ width: "100%", alignItems: "center" }}>
      <Card
        sx={{
          margin: "auto",
          width: "40%",
          maxWidth: "760px"
        }}
      >
        <Heading
          as="h2"
          sx={{
            textAlign: "center",
            margin: "20px 0px"
          }}
        >
          Create New Question
        </Heading>
        <Divider />
        <Heading as="h5" sx={{ margin: "20px 0px" }}>
          Complete the question:
        </Heading>
        <Heading as="h3">Would you rather...</Heading>
        <form onSubmit={submit}>
          <Input
            name="optionOneText"
            id="optionOneText"
            value={question.optionOneText}
            onChange={handleChange}
          />
          <Heading as="h4" sx={{ width: "100%", textAlign: "center" }}>
            OR
          </Heading>
          <Input
            name="optionTwoText"
            id="optionTwoText"
            value={question.optionTwoText}
            onChange={handleChange}
          />
          <Button
            type="submit"
            disabled={!question.optionOneText || !question.optionTwoText}
            sx={{
              width: "100%"
            }}
          >
            Submit
          </Button>
        </form>
      </Card>
    </Flex>
  );
};

NewQuestion.propTypes = {
  saveQuestion: PropTypes.func.isRequired
};

export default NewQuestion;
