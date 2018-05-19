import React, { Component } from 'react';

class ChangeColorButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick();
    console.log('click');
  }

  render() {
    return(
      <button onClick={ this.handleClick }>change color</button>
    );
  }
}

export default ChangeColorButton;
