import React, { Component } from 'react';
import '../css/Box.css';

class Box extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
        'burgundy'
      ]
  };

  handleChange(e) {
    this.props.change(this.props.index);
  }
  render() {
    return (
      <div className={'Box'} style={{background: this.props.color}} onClick={this.handleChange}/>
    )
  }

}

export default Box;
