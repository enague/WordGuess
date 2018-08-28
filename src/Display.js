import React, { Component } from 'react';
import Letter from './Letter.js';



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
              <h4>Submitted Letters</h4>
              <p style={{color: '#e88d0d', fontSize: '30px'}}>{this.props.submittedLetters}</p>
            </div>
            <div className="col-sm">
              <h4>Incorrect Letters</h4>
              <p style={{color: '#e88d0d', fontSize: '30px'}}>{this.props.incorrect}</p>
            </div>
            <div className="col-sm">
              <h4>Guesses Remaining</h4>
              <p style={{color: '#e88d0d', fontSize: '30px'}}>{6 - this.props.count }<span style={{padding: '5px'}} >{this.showEmoji(6 - this.props.count)}</span></p>
            </div>
          </div>
      </div>
    );
  }
}

export default Display;