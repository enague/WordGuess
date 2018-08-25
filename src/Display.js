import React, { Component } from 'react';
import Letter from './Letter.js'

class Display extends Component {
 constructor(props) {
     super(props);
     this.state = {
        guess: []
     }
     this.setWord = this.setWord.bind(this)
 }

 componentDidMount(){
  this.setWord()
 }

 componentWillReceiveProps() {
   this.setWord()
 }

 setWord() {
  let word = this.props.word.split('')
  this.setState({
    guess: word
  })
 }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
          {this.state.guess.map((letter,i) => 
            <Letter letter={letter} key={i}/>
          )}
      </div>
    );
  }
}

export default Display;