import React, { Component } from 'react';
import Letter from './Letter.js';
import styled from 'styled-components';

const Headers = styled.h4`
  @media(max-width: 700px) {
      font-size: 20px
  }
`
const Elements = styled.p`
  color: #e88d0d;
  fontSize: 30px

  @media(max-width: 700px) {
    font-size: 20px
  }
`

class Display extends Component {
  constructor(props){
    super(props)
    this.state = {};
    this.showEmoji = this.showEmoji.bind(this)
  }

  showEmoji(num){
    if(num ===6){
      return '😁'
    } else if(num === 5) {
      return '🙂'
    } else if(num === 4) {
      return '🤨'
    } else if(num === 3) {
      return '😕'
    } else if(num === 3) {
      return '😔'
    } else if(num === 2) {
      return '😢'
    } else if(num === 1) {
      return '😨'
    } else {
      return '😭'
    }
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
          <div style={{display: 'flex', justifyContent: 'center', padding: '40px'}}>
            {this.props.guess.map((letter,i) => 
              <Letter letter={letter} reveal={this.props.reveal} key={i} submittedLetters={this.props.submittedLetters}/>
            )}
          </div>
          <p style={{color: 'red'}}>{this.props.hint ? this.props.hint : null }</p>
          <div className="row" style={{paddingTop: '30px'}}> 
            <div className="col-sm">
              <Headers>Submitted Letters</Headers>
              <Elements>{this.props.submittedLetters}</Elements>
            </div>
            <div className="col-sm">
              <Headers>Incorrect Letters</Headers>
              <Elements>{this.props.incorrect}</Elements>
            </div>
            <div className="col-sm">
              <Headers>Guesses Remaining</Headers>
              <Elements>{6 - this.props.count }<span style={{padding: '5px'}} >{this.showEmoji(6 - this.props.count)}</span></Elements>
            </div>
          </div>
      </div>
    );
  }
}

export default Display;