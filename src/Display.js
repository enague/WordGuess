import React, { Component } from 'react';
import Letter from './Letter.js';
import styled from 'styled-components';



class Display extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', padding: '30px'}}>
          <div style={{display: 'flex', justifyContent: 'center', padding: '50px', background: 'black', borderRadius: '25px', opacity: '0.5'}}>
            {this.props.guess.map((letter,i) => 
              <Letter letter={letter} key={i} submittedLetters={this.props.submittedLetters}/>
            )}
          </div>
          <div className="row" style={{paddingTop: '50px'}}> 
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