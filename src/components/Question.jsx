import React from "react";
import Timer from "./Timer";
import Button from "./Button";
import questions from "../questionsArray.json";

function Question(props) {
  return (
    <div>
      <Timer time={props.time} />
      <h3>{questions[props.currentQuestion].question}</h3>
      {questions[props.currentQuestion].answers.map(answer => {
        return (
          <Button
            onClick={props.nextQuestion}
            key={answer}
            text={answer}
            id={answer}
            className="answer"
          />
        );
      })}
    </div>
  );
}

export default Question;
