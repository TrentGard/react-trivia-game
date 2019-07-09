import React from "react";
import Title from "./Title";
import Button from "./Button";

function Results(props) {
  return (
    <div>
      <Title />
      <h3>Correct Answers: {props.correct}</h3>
      <h3>Incorrect Answers: {props.incorrect}</h3>
      <Button text="Play Again?" onClick={props.restartGame} />
    </div>
  );
}

export default Results;
