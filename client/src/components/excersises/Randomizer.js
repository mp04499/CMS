import React, { Component } from 'react';
import Box from './Box';

class Randomizer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: Array.from({length: 16})
        .map(c =>
          this.props.colors[Math.floor(Math.random() * this.props.colors.length)])
    };
    this.change = this.change.bind(this);
  }

  static defaultProps = {
    colors:
    [
      'blue',
      'black',
      'purple',
      'yellow',
      'green',
      'red',
      'orange',
      'cyan',
      'pink'
    ]
  };

  change(index) {
    this.setState(curState => ({
      colors: curState.colors.map((c, i) => i === index
        ? this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
        : curState.colors[i])
    }));

    let other = ['marran', 'black'];
    this.setState({colors: other});
    console.log(this.state.colors);
  }


  render() {
    const boxes = this.state.colors.map((c, i) =>
        <div>
          <Box index={i} change={this.change} color={this.state.colors[i]} />
        </div>
      );
    return (
      <div>
        {boxes}
      </div>
    )
  }


}

export default Randomizer;
