import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Quiz from "./components/Quiz";
import Button from "./components/Button/";
import questions from "./questionsArray.json";

class App extends Component {
  state = {
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    gameStarted: false,
    gameFinished: false,
    titleText: "Colts Trivia Game!",
    time: 15,
    showAnswer: false,
    userAnswer: ""
  };

  timer = null;
  timeout = null;

  startTimer() {
    if (this.timer) clearInterval(this.timer);
    this.setState({ time: 15, userAnswer: "" }, () => {
      this.timer = setInterval(() => {
        this.setState(state => {
          let newTime = state.time - 1;
          if (newTime === 0) {
            this.outOfTime();
          }
          return { time: state.time - 1 };
        });
      }, 1000);
    });
  }

  gameStart = () => {
    this.setState({ gameStarted: true });
    this.startTimer();
  };

  gameFinished = () => {
    this.setState({
      gameFinished: true,
      titleText: "Results!"
    });
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  startAnswerTimer() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      if (this.state.currentQuestion < questions.length - 1) {
        this.setState({
          currentQuestion: this.state.currentQuestion + 1,
          showAnswer: false,
          titleText: "Colts Trivia Game!"
        });
        this.startTimer();
      } else this.gameFinished();
    }, 5000);
  }

  outOfTime() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState(
      {
        time: 15,
        incorrect: this.state.incorrect + 1,
        showAnswer: true,
        titleText: "Incorrect!",
        userAnswer: "AFK!"
      },
      this.startAnswerTimer()
    );
  }

  nextQuestion = e => {
    let answer = e.target.id;
    if (answer !== questions[this.state.currentQuestion].correctAnswer) {
      this.setState(
        {
          time: 15,
          incorrect: this.state.incorrect + 1,
          showAnswer: true,
          titleText: "Incorrect!",
          userAnswer: answer
        },
        this.startAnswerTimer()
      );
    } else {
      this.setState(
        {
          time: 15,
          correct: this.state.correct + 1,
          showAnswer: true,
          titleText: "Correct!",
          userAnswer: answer
        },
        this.startAnswerTimer()
      );
    }
  };

  restartGame = e => {
    this.setState({
      correct: 0,
      incorrect: 0,
      currentQuestion: 0,
      gameStarted: false,
      gameFinished: false,
      titleText: "Colts Trivia Game!",
      time: 15,
      showAnswer: false
    });
  };

  render() {
    return (
      <div className="App">
        <Title text={this.state.titleText} />
        {!this.state.gameStarted && !this.state.gameFinished ? (
          <Button
            text="Start"
            className="answer start-button"
            onClick={this.gameStart}
          />
        ) : (
          <Quiz
            time={this.state.time}
            currentQuestion={this.state.currentQuestion}
            nextQuestion={this.nextQuestion}
            gameFinished={this.state.gameFinished}
            correct={this.state.correct}
            incorrect={this.state.incorrect}
            restartGame={this.restartGame}
            showAnswer={this.state.showAnswer}
            userAnswer={this.state.userAnswer}
          />
        )}
      </div>
    );
  }
}

export default App;
