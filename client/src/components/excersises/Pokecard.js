import React, { Component } from 'react';
import '../css/Pokecard.css';

class Pokecard extends Component {

  render() {

    function processId(id) {
      if(id < 10)
        return `00${id}`;
      else if(id < 100)
        return `0${id}`;
      else return id;
    }

    const POKE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    return(
      <div className={'Pokecard-card'}>
        <div className={'Pokecard-container'}>
          <h1>{this.props.name}</h1>
          <img className={'Pokecard-image'} src={`${POKE_URL}${processId(this.props.id)}.png`} alt={this.props.name}/>

          <p>Type: {this.props.type}</p>

          <p>EXP: {this.props.exp}</p>
        </div>
      </div>
    )
  }
}

export default Pokecard;
