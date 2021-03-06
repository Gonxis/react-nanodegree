import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
  	title: "ReactND - Coding Practice"
  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title}/>
      </div>
    );
  }
}

export default App;
