import React from "react";
import Question from "./Question";
import Results from "./Results";
import AnswerScreen from "./AnswerScreen";

function Quiz(props) {
  if (props.gameFinished) {
    return (
      <Results
        correct={props.correct}
        incorrect={props.incorrect}
        restartGame={props.restartGame}
      />
    );
  }
  if (props.showAnswer) {
    return (
      <AnswerScreen
        currentQuestion={props.currentQuestion}
        userAnswer={props.userAnswer}
      />
    );
  }
  return (
    <Question
      time={props.time}
      currentQuestion={props.currentQuestion}
      nextQuestion={props.nextQuestion}
    />
  );
}

export default Quiz;
