import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
    className: 'btn btn-dark'
})`
    height: 30px;
    padding: 5px;
`

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
      <div style={{paddingBottom: '300px'}}>
        <h2 style={{padding: '10px'}}>Guess a Letter Here!</h2>
        <input type='text' value={this.state.value} onChange={this.handleChange}></input>
        <Button className="btn btn-dark"onClick={() =>{this.props.handleSubmitLetter(this.state.letter)}}>Submit</Button>
        <Button className="btn btn-dark"onClick={() => {this.props.chooseWord(this.props.words)}}>Choose Another Word</Button>
      </div>
    );
  }
}

export default Board;