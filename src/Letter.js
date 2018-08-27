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
`

class Letter extends Component {
 constructor(props){
     super(props);
     this.state = {
         value: false,
     }
 }
 
  render() {
    return (
      <div style={{padding: '5px'}}>
          <p>{this.props.submittedLetters.includes(this.props.letter) ? <Block>{this.props.letter.toUpperCase()}</Block> : '__'}</p>
      </div>
    );
  }
}

export default Letter;