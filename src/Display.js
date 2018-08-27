import React, { Component } from 'react';
import Letter from './Letter.js';



class Display extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
          <div style={{display: 'flex', justifyContent: 'center', padding: '40px'}}>
            {this.props.guess.map((letter,i) => 
              <Letter letter={letter} key={i} submittedLetters={this.props.submittedLetters}/>
            )}
          </div>
          <p style={{color: 'red'}}>{this.props.hint ? this.props.hint : null }</p>
          <div className="row" style={{paddingTop: '30px'}}> 
            <div className="col-sm">
              <h3>Submitted Letters</h3>
              <p>{this.props.submittedLetters}</p>
            </div>
            <div className="col-sm">
              <h3>Incorrect Letters</h3>
              <p>{this.props.incorrect}</p>
            </div>
            <div className="col-sm">
              <h3>Guesses Remaining</h3>
              <p>{6 - this.props.count }</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Display;