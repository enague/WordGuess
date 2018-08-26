import React, { Component } from 'react';

class Letter extends Component {
 constructor(props){
     super(props);
     this.state = {
         value: false,
     }
 }
 
  render() {
    return (
      <div style={{padding: '20px'}}>
          <p>{this.props.submittedLetters.includes(this.props.letter) ? this.props.letter : '__'}</p>
      </div>
    );
  }
}

export default Letter;