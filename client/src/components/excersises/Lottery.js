import React, { Component } from 'react';
import LottoBall from './LottoBall';
import '../css/Lottery.css';

class Lottery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({length: this.props.numBalls})
    };
    this.runLotto = this.runLotto.bind(this);
  }

  runLotto() {
    this.setState(crState => ({
      nums: crState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));

  }

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div>
        <h1>{props.title}</h1>
        <div className={'Lottery'}>
          {state.nums.map(n =>
            <LottoBall num={n} />
           )}
        </div>
        <button onClick={this.runLotto}>Go Lotto!</button>
      </div>
    )
  }

}

export default Lottery;
