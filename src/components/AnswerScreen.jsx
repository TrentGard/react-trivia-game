import React from "react";
import gifArray from "../gifArray.json";
import questions from "../questionsArray.json";

function AnswerScreen(props) {
  return (
    <div>
      <h3>Your Answer: {props.userAnswer}</h3>
      <img src={gifArray[props.currentQuestion]} alt="Colts" />
      <h3>Correct Answer: {questions[props.currentQuestion].correctAnswer}</h3>
    </div>
  );
}

export default AnswerScreen;
