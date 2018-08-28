import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
    className: 'btn btn-dark'
})`
    padding: 5px;
    margin: 5px;
    width: 100px
`

const Options = Button.extend`
    width: 200px;
`

class Board extends Component {
 constructor(props){
     super(props);
     this.state = {
         letter: null,
         word: null,
     }
     this.handleLetter = this.handleLetter.bind(this)
     this.handleWord = this.handleWord.bind(this)
 }

 handleLetter(event) {
     this.setState({
         letter: event.target.value
     })
 }

 handleWord(event) {
    this.setState({
        word: event.target.value
    })
}

  render() {
    return (
      <div style={{padding: '50px'}}>
        <div className='row'>
            <div className='col-sm'>
                <input type='text' maxLength='1' placeholder='Enter a letter here...'style={{border: '2px solid black', borderRadius: '4px', height: '30px'}} onChange={this.handleLetter}></input>
                <Button className="btn btn-dark" onClick={() =>{this.props.handleSubmitLetter(this.state.letter)}}>Submit</Button> <br />
                <input type='text' placeholder='Enter word guess here...'style={{border: '2px solid black', borderRadius: '4px', height: '30px'}} onChange={this.handleWord}></input>
                <Button className="btn btn-dark" onClick={() =>{this.props.handleSubmitWord(this.state.word)}}>Submit</Button> <br />
            </div>
            <div className='col-sm-3'>
                <Options className="btn btn-dark" onClick={() => {this.props.needHint(this.props.word)}}>Need a Hint?</Options>
                <Options className="btn btn-dark" onClick={() => {this.props.chooseWord(this.props.words)}}>Choose Another Word</Options>
                <div style={{width: '200px'}}><b>Current Difficulty: {this.props.difficulty}</b></div>
                <div style={{display: 'flex', width: '200px'}}>
                    <button className="btn btn-success" style={{width: '50%'}} onClick={() => {this.props.raise(this.props.difficulty)}}>&#8679;</button>
                    <button className="btn btn-danger" style={{width: '50%'}} onClick={() => {this.props.lower(this.props.difficulty)}}>&#x21E9;</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Board;