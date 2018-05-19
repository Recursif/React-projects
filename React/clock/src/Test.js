import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      button: 'click me!'
    };
  }
  handleClick() {
    this.setState({
      button: 'ok'
    });
    console.log('click');
  }
  render() {
    return (
      <div>
        <button onClick={ this.handleClick } >
          { this.state.button }
        </button>
      </div>
    );
  }
}

export default Test;
