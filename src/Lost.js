import React, { Component } from 'react';

class Lost extends Component {
 
  render() {
    return (
        <div className="alert alert-danger" role="alert" style={{height: '100px', fontSize: '40px'}}>
        Sorry you lost! Try again 😱
      </div>
    );
  }
}

export default Lost;