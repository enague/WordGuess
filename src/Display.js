import React, { Component } from 'react';
import Letter from './Letter.js'

class Display extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
          {this.props.guess.map((letter,i) => 
            <Letter letter={letter} key={i}/>
          )}
      </div>
    );
  }
}

export default Display;