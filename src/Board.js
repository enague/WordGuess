import React, { Component } from 'react';

class Board extends Component {
 constructor(props){
     super(props);
     this.state = {
         letter: null
     }
     this.handleChange = this.handleChange.bind(this)
 }

 handleChange(event) {
     this.setState({
         letter: event.target.value
     })
 }
  render() {
    return (
      <div>
        <h1>Guess a Letter Here!</h1>
        <input type='text' value={this.state.value} onChange={this.handleChange}></input>
        <button onClick={() =>{this.props.handleSubmitLetter(this.state.letter)}}>Submit</button>
        <button onClick={() => {this.props.chooseWord(this.props.words)}}>Choose Another Word</button>
      </div>
    );
  }
}

export default Board;