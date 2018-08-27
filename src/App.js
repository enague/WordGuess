import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './Landing.js';
import HowToPlay from './HowToPlay';
import Board from './Board.js';
import Display from './Display.js';
import Congrats from './Congrats.js';
import Lost from './Lost.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        words: [],
        word: null,
        guess: [],
        hint: null,
        incorrect: [],
        submittedLetters: [],
        count: 0,
        check: [],
        win: false,
        lose: false,
        difficulty: 5,
    }
    this.getWords = this.getWords.bind(this)
    this.getRandomNumber = this.getRandomNumber.bind(this)
    this.chooseWord = this.chooseWord.bind(this)
    this.setGuess = this.setGuess.bind(this)
    this.handleSubmitLetter = this.handleSubmitLetter.bind(this)
    this.checkGuess = this.checkGuess.bind(this)
    this.checkWin = this.checkWin.bind(this)
    this.needHint = this.needHint.bind(this)
    this.handleSubmitWord =this.handleSubmitWord.bind(this)
    this.lowerDifficulty = this.lowerDifficulty.bind(this)
    this.raiseDifficulty = this.raiseDifficulty.bind(this)

}

componentDidMount() {
  this.getWords(this.state.difficulty);
}

getWords(difficulty) {
  axios.get('/words', {
    params: {
      difficulty: difficulty
    }
  }) 
  .then(res => {
      let dictionary = res.data
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
    count: 0,
    hint: null
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

handleSubmitWord(word) {
  let guess = this.state.guess.join('')
  console.log(guess, word)

  if(guess === word) {
    console.log('players 2 wins!')
    this.setState({
      win: true,
      lose: false
    })
  } else {
    console.log('Not the right word!Sorry try again!')
    this.setState({
      lose: true,
      win: false
    })
  }

  let increase = this.state.count + 1;
  this.setState({
    count: increase
  })
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

needHint(word) {
  axios.get('/hint', {
    params: {
      word: word
    }
  })
  .then((response) => {
     let hint = response.data[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
     this.setState({
       hint: hint
     })
 })
 .catch((err) => {
     console.log(err)
 })
}

lowerDifficulty(difficulty){
  let lower = difficulty - 1
  if(lower < 1) {
    lower = 1
  }
  this.setState({
    difficulty: lower
  })
  this.getWords(this.state.difficulty)
}

raiseDifficulty(difficulty){
  let raise = difficulty + 1
  if(raise > 10) {
    raise = 10
  }
  this.setState({
    difficulty: raise
  })
  this.getWords(this.state.difficulty)
}
  render() {
    return (
      <div className="App">
        <Landing />
        <HowToPlay />
        {this.state.win ? <Congrats /> : null}
        {this.state.lose ? <Lost /> : null}
        <div className="container">
          {this.state.word ? <Display word={this.state.word} hint={this.state.hint} guess={this.state.guess} count={this.state.count} submittedLetters={this.state.submittedLetters} incorrect={this.state.incorrect}/>: 'Fishing for some words...'}
          <Board difficulty={this.state.difficulty} raise={this.raiseDifficulty} lower={this.lowerDifficulty} word={this.state.word} words={this.state.words} chooseWord={this.chooseWord} needHint={this.needHint} handleSubmitLetter={this.handleSubmitLetter} handleSubmitWord={this.handleSubmitWord}/>
        </div>
      </div>
    );
  }
}

export default App;
