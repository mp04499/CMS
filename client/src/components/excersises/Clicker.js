import React, { Component } from 'react';

class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(crState => ({
      num: crState.num + 1
    }));
  }
  render() {
    const state = this.state;
    return (
      <div>
        <h1>The number is {state.num}</h1>
        {state.num !== 7 ? <button onClick={this.handleClick}>Click Me</button> : <h2>Winner!!!</h2>}
      </div>
    )
  }

}

export default Clicker;
