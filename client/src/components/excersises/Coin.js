import React, { Component } from 'react';

class Coin extends Component {
  render() {
    return (
      <div>
        <img src={this.props.heads
          ? 'https://tinyurl.com/react-coin-heads-jpg'
          : 'https://tinyurl.com/react-coin-tails-jpg'}
         alt={this.props.heads
           ? 'Heads'
           : 'Tails'}/>
      </div>
    )
  }
}

export default Coin;
