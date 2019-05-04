import React, { Component } from 'react';
import Die from './Die';
import '../css/RollDice.css';
import '@fortawesome/fontawesome-free/css/all.css';

class RollDice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      one: 'one',
      two: 'two',
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }

  static defaultProps = {
    faces:
      [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six'
      ]
  };

  roll() {
    const dice1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
    const dice2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];

    this.setState({one: dice1, two: dice2, rolling: true});

    this.change = setTimeout(() => {
      this.setState({rolling: false})
    }, 1000);
  }

  render() {
    const state = this.state;
    return (
      <div>
          <Die class={state.rolling ? `${state.one} rotate-scale-up` : state.one} />
          <Die class={state.rolling ? `${state.two} rotate-scale-up` : state.two} />
        <button
          onClick={this.roll}
          disabled={state.rolling ? true : null}
        >
          {state.rolling ? 'Rolling.....' : 'Roll!'}
        </button>
      </div>
    )
  }

}

export default RollDice;
