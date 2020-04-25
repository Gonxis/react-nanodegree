import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    correct: 0,
    answeredQuestions: 0,
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    proposedAnswer: Math.floor(Math.random() * 3),
  }

newQuestion() {
	this.setState(prevState => ({
		value1: Math.floor(Math.random() * 100),
		value2: Math.floor(Math.random() * 100),
		value3: Math.floor(Math.random() * 100),
		proposedAnswer: Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3
	}))
}

  isTheSumEqualToProposedAns() {
    return this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer
	//console.log(value1 + value2 + value3 === proposedAnswer)
  }

isTheAnswerCorrect(event) {
  	const answer = event.target.name;

	if ((answer === 'true' && this.isTheSumEqualToProposedAns) || (answer === 'false' && !this.isTheSumEqualToProposedAns)) {
      console.log("Answer correct!")
      	this.setState((previousState) => ({
    		correct: previousState.correct + 1,
      		answeredQuestions: previousState.answeredQuestions + 1
    	}))
    } else {
      console.log("Answer incorrect... Please try again :D")
    	this.setState((previousState) => ({
    		correct: previousState.correct,
      		answeredQuestions: previousState.answeredQuestions + 1
    	}))
    }

this.newQuestion()
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={(e) => this.isTheAnswerCorrect(e)} name="true">True</button>
          <button onClick={(e) => this.isTheAnswerCorrect(e)} name="false">False</button>
          <p className="text">
            Your Score: {this.state.correct}/{this.state.answeredQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
