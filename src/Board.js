import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
    className: 'btn btn-dark'
})`
    padding: 5px;
    margin: 5px;
    width: 100px
`

const Options = Button.extend`
    width: 200px;
`

class Board extends Component {
 constructor(props){
     super(props);
     this.state = {
         letter: null
     }
     this.handleChange = this.handleChange.bind(this)
 }

 handleChange(event) {
     this.setState({
         letter: event.target.value
     })
 }
  render() {
    return (
      <div style={{paddingBottom: '300px'}}>
        <div className='row'>
            <div className='col-sm'>
                <input type='text' maxLength='1' placeholder='Enter a letter here...'style={{border: '2px solid black', borderRadius: '4px', height: '30px'}}onChange={this.handleChange}></input>
                <Button className="btn btn-dark"onClick={() =>{this.props.handleSubmitLetter(this.state.letter)}}>Submit</Button> <br />
                <input type='text' placeholder='Enter word guess here...'style={{border: '2px solid black', borderRadius: '4px', height: '30px'}}onChange={this.handleChange}></input>
                <Button className="btn btn-dark">Submit</Button> <br />
            </div>
            <div className='col-sm-3'>
                <Options className="btn btn-dark">Need a Hint?</Options>
                <Options className="btn btn-dark" onClick={() => {this.props.chooseWord(this.props.words)}}>Choose Another Word</Options>
                <Options className="btn btn-dark">Change Difficulty</Options>
            </div>
        </div>
      </div>
    );
  }
}

export default Board;