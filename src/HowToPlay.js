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
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <div>&#10008;  The goal is to guess the word</div>
                      <div>&#10008;  You have <b>6</b> chances</div>
                      <div>&#10008;  You can either guess a <b>letter</b> or a <b>word</b> if you figured it out</div>
                      <div>&#10008;  If you guess a letter or word and it is incorrect, your guesses will decrease by 1</div>
                    </div>
                </Segment>
                <Segment>
                  <i className="fas fa-trophy fa-2x"></i>
                  <p>In order to win, you must guess the word before your guesses run out</p>
                </Segment>
            </div>
            <div className='col-sm'>
                <h2>Rules To Keep In Mind</h2>
                <Segment>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <div>&#9995; You can ask for a hint that will give you the definition of the unknown word</div>
                      <div>&#9995;  All submitted letters and incorrect guesses will be on display, so try to avoid entering the same letter</div>
                      <div>&#9995;  Difficulty ranges from 1-10. Default difficulty is 5. You can change level of difficulty if you want</div>
                    </div>
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