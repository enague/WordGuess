import React, { Component } from 'react';
import styled from 'styled-components';

const Block = styled.div`
    height: 55px;
    width: 50px;
    background: white;
    color: #e88d0d;
    font-size: 40px;
    border-radius: 12px;
    float: center;

    @media(max-width: 700px) {
        color: #e88d0d;
        font-size: 15px;
        background: none;
        height: auto;
        width: auto;
    }
  
`

class Letter extends Component { 
  render() {
    return (
      <div style={{padding: '2px'}}>
          <p>{this.props.submittedLetters.includes(this.props.letter) || this.props.reveal ? <Block>{this.props.letter.toUpperCase()}</Block> : '__'}</p>
      </div>
    );
  }
}

export default Letter;