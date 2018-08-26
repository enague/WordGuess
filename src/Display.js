import React, { Component } from 'react';
import Letter from './Letter.js'

class Display extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {this.props.guess.map((letter,i) => 
              <Letter letter={letter} key={i} submittedLetters={this.props.submittedLetters}/>
            )}
          </div>
          <div>
            <h1>Submitted Letters</h1>
            <p>{this.props.submittedLetters}</p>
            <h1>Incorrect Letters</h1>
            <p>{this.props.incorrect}</p>
            <h1>Guesses Remaining</h1>
            <p>{6 - this.props.count }</p>
          </div>
      </div>
    );
  }
}

export default Display;