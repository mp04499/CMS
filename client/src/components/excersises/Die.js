import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/RollDice.css';

class Die extends Component {

  render() {
    return (
      <i className={ `fas fa-dice-${this.props.class}`} style={{fontSize: "200px", color: "Dodgerblue", padding: "20px"}} />
    );
  }

}

export default Die;
