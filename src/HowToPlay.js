import React, { Component } from 'react';
import styled from 'styled-components';

const Segment = styled.div`
  margin: 20px;
`

class HowToPlay extends Component {
  render() {
    return (
      <div style={{background: '#E3E5E4', minHeight: '400px', width: '100%', color: 'black', padding: '30px'}}>
        <div className='row'>
            <div className='col-sm' style={{display: 'flex', flexDirection: 'column'}}>
                <h2>How To Play</h2>
                <Segment>
                  <i className="fas fa-gamepad fa-2x"></i> <br />
                    <ul>
                      <li>The goal is to guess the word</li>
                      <li>You have <b>6</b> chances</li>
                      <li>You can either guess a <b>letter</b> or a word if you figured it out, but each guess will count against the guesses remaining</li>
                    </ul>
                </Segment>
                <Segment>
                  <i className="fas fa-trophy fa-2x"></i>
                  <p>In order to win, you must guess the word before your guesses run out</p>
                </Segment>
            </div>
            <div className='col-sm'>
                <h2>Rules To Keep In Mind</h2>
                <Segment>
                    <ul>
                      <li>You can ask for a hint that will give you the definition of the unknown word</li>
                      <li>All submitted letters and incorrect guesses will be on display, so try to avoid entering the same letter</li>
                      <li>Difficulty ranges from 1-10. Default difficulty is 5. You can change level of difficulty if you want</li>
                    </ul>
                    <h2>
                      Have fun and try your best!
                    </h2>
                </Segment>
            </div>
        </div>
      </div>
    );
  }
}

export default HowToPlay;