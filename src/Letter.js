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
          <p>{this.state.value ? this.props.letter : '?'}</p>
      </div>
    );
  }
}

export default Letter;