import React, { Component } from 'react';

class Congrats extends Component {
 
  render() {
    return (
        <div className="alert alert-success" role="alert" style={{height: '100px', fontSize: '40px'}}>
         ✨ Congrats you won! ✨
      </div>
    );
  }
}

export default Congrats;