import React, { Component } from 'react';
import '../css/LottoBall.css';
class LottoBall extends Component {
  static defaulProps = {
    num: 0
  };
  render() {
    const {num} = this.props;
    return (
      <div className={'LottoBall'}>
        {num || 0}
      </div>
    )
  }
}

export default LottoBall;
