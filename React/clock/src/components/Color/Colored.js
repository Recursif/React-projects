import React, { Component } from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class Colored extends Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: '#EEEEEF'
    };
  }

  changeColor() {
    this.setState((prevState) => {
      let newColor = prevState.color === '#EEEEEF' ? '#092243' : '#EEEEEF';
      return {
        color: newColor
      }
    });
  }

  render () {
    return (
      <div style={{width: "200px", height: "200px", backgroundColor: this.state.color }}>
        <ChangeColorButton onClick={this.changeColor}/>
      </div>
    );
  }
}

export default Colored;
