import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Board from './Board.js';
import Display from './Display.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        words: [],
        word: null,
        guess: [],
        submittedLetters: []
    }
    this.getWords = this.getWords.bind(this)
    this.getRandomNumber = this.getRandomNumber.bind(this)
    this.chooseWord = this.chooseWord.bind(this)
    this.setGuess = this.setGuess.bind(this)
    this.handleSubmitLetter = this.handleSubmitLetter.bind(this)
}

componentDidMount() {
  this.getWords()
}

getWords() {
  axios({
     method: 'get',
     url: 'http://app.linkedin-reach.io/words',
  })   
  .then((response) => {
      let dictionary = response.data.split('\n')
      this.setState({
          words: dictionary
      })
      this.chooseWord(dictionary)
  })
  .catch((err) => {
      console.log(err)
  })
}

getRandomNumber(max) {
   return Math.floor(Math.random() * Math.floor(max))
}

chooseWord(dictionary) {
  let word = dictionary[this.getRandomNumber(dictionary.length - 1)]
  this.setState({
      word: word
  })
  this.setGuess(word)
  this.setState({
    submittedLetters: []
  })
}

setGuess(word) {
  let guess = word.split('')
  this.setState({
    guess: guess
  })
 }

handleSubmitLetter(letter) {
  let arr = this.state.submittedLetters
  arr.push(letter)
  this.setState({
    submittedLetters: arr
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to WordGuess!</h1>
        </header>
        {this.state.word ? <Display word={this.state.word} guess={this.state.guess} submittedLetters={this.state.submittedLetters}/>: null}
        <Board words={this.state.words} chooseWord={this.chooseWord} handleSubmitLetter={this.handleSubmitLetter}/>
      </div>
    );
  }
}

export default App;
