import React, { Component } from 'react';
import styled from 'styled-components';

const Congratsstyles = styled.div`
    height: 100px;
    font-size: 40px;

    @media(max-width: 700px) {
        font-size: 30px;
    }
  
    @media (max-width:300px) {
        font-size: 5px;
    }
`

class Congrats extends Component {
 
  render() {
    return (
        <Congratsstyles className="alert alert-success" role="alert">
            Congrats you won! <span role="img" aria-label="star">✨</span>
        </Congratsstyles>
    );
  }
}

export default Congrats;