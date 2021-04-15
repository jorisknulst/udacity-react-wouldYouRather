import React from "react";
import PropTypes from "prop-types";
import { Radio, Button, Box, Label, Heading } from "theme-ui";

const Question = ({ handleChange, answer, optionOne, optionTwo, submit }) => {
  return (
    <Box>
      <Heading as="h3">Would you rather...</Heading>
      <br />
      <Label>
        <Radio
          name="optionOne"
          id="optionOne"
          onChange={handleChange}
          checked={answer === "optionOne"}
        />
        {optionOne.text}
      </Label>
      <br />
      <Heading as="h4">OR</Heading>
      <br />
      <Label>
        <Radio
          name="optionTwo"
          id="optionTwo"
          onChange={handleChange}
          checked={answer === "optionTwo"}
        />
        {optionTwo.text}
      </Label>
      <br />
      <Button
        onClick={submit}
        disabled={!answer}
        sx={{
          width: "100%"
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

Question.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  asnwer: PropTypes.string,
  optionOne: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  optionTwo: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Question;
