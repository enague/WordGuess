import React, { Component } from 'react';
import styled from 'styled-components';

const Loststyles = styled.div`
    height: 100px;
    font-size: 40px;

    @media(max-width: 700px) {
        font-size: 30px;
    }
  
    @media (max-width:300px) {
        font-size: 5px;
    }
`

class Lost extends Component {
 
  render() {
    return (
        <Loststyles className="alert alert-danger" role="alert">
            Sorry you lost! Try again <span role="img" aria-label="sad">😱</span>
        </Loststyles>
    );
  }
}

export default Lost;