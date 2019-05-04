import React, { Component } from 'react';
import Coin from './Coin';
import '../css/CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeads: false,
      flips: 0,
      heads: 0,
      tails: 0
    };
    this.onClick = this.onClick.bind(this);
    this.flip = this.flip.bind(this);
    this.count = this.count.bind(this);
  }

  flip() {
    this.setState({isHeads: !this.state.isHeads});

    this.setState(curState => ({
      flips: curState.flips + 1
    }));
  }

  count() {
    !this.state.isHeads
      ? this.setState(curState => ({
        heads: curState.heads + 1
      }))
      : this.setState(curState => ({
        tails: curState.tails + 1
      }));
  }

  onClick() {
    this.flip();
    this.count();
  }

  render() {
    const state = this.state;
    return (
      <div>
        <div className={'CoinFlipper'}>
         <Coin heads={this.state.isHeads}/>
        </div>
        <button onClick={this.onClick}>Flip Coin</button>
        <p>Flips: {state.flips} Heads: {state.heads} Tails: {state.tails}</p>
      </div>
    )
  }
}

export default CoinFlipper;
