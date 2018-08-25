import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div>
        <h1>Guess a Letter Here!</h1>
        <input></input>
        <button>Submit</button>
        <button onClick={() => {this.props.chooseWord(this.props.words)}}>Choose Another Word</button>
      </div>
    );
  }
}

export default Board;