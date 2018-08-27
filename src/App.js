import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './Landing.js';
import HowToPlay from './HowToPlay';
import Board from './Board.js';
import Display from './Display.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        words: [],
        word: null,
        guess: [],
        incorrect: [],
        submittedLetters: [],
        count: 0,
        check: [],
    }
    this.getWords = this.getWords.bind(this)
    this.getRandomNumber = this.getRandomNumber.bind(this)
    this.chooseWord = this.chooseWord.bind(this)
    this.setGuess = this.setGuess.bind(this)
    this.handleSubmitLetter = this.handleSubmitLetter.bind(this)
    this.checkGuess = this.checkGuess.bind(this)
    this.checkWin = this.checkWin.bind(this)
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
    submittedLetters: [],
    incorrect: [],
    count: 0
  })
}

setGuess(word) {
  let guess = word.split('')
  let check = new Array(guess.length)
  check.fill(false)
  this.setState({
    guess: guess,
    check: check
  })
 }

handleSubmitLetter(letter) {
  let arr = this.state.submittedLetters
  arr.push(letter)
  this.setState({
    submittedLetters: arr
  })

  let incorrect = this.state.incorrect
  if(!this.state.guess.includes(letter)) {
    incorrect.push(letter)
    this.setState({
      incorrect: incorrect
    })
  }
  let increase = this.state.count + 1;
  this.setState({
    count: increase
  })
  this.checkGuess(this.state.guess, this.state.check, letter)
  this.checkWin(this.state.check, this.state.count)
}

checkGuess(guess, check, letter){
  for(let i = 0; i < check.length; i++){
    if(guess[i] === letter) {
      check[i] = true
    }
  }
}

checkWin(check, count) {
  if(check.every(x => x === true) && count <= 5) {
    console.log('player 2 wins!')
  } else if(!check.every(x => x === true) && count > 5) {
    console.log('computer wins!')
  }
}

  render() {
    return (
      <div className="App">
        <Landing />
        <HowToPlay />
        <div className="container">
          {this.state.word ? <Display word={this.state.word} guess={this.state.guess} count={this.state.count} submittedLetters={this.state.submittedLetters} incorrect={this.state.incorrect}/>: 'Fishing for some words...'}
          <Board words={this.state.words} chooseWord={this.chooseWord} handleSubmitLetter={this.handleSubmitLetter}/>
        </div>
      </div>
    );
  }
}

export default App;
