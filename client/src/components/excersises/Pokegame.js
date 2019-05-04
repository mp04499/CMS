import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {

  constructor(props) {
    super(props);

    console.log(this.props);
  }

  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  };

  render() {
    const props = this.props;

    function getHand () {
      const hand = [];
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * props.pokemon.length);
        hand.push(props.pokemon[index]);
        props.pokemon.splice(index, 1);
      }
      return hand;
    }

    function totalExp(hand) {
      let total = 0;
      for(let i = 0; i < hand.length; i++)
        total += hand[i].base_experience;
      return total;
    }


    const hand1 = getHand();
    console.log(hand1);
    const hand2 = getHand();
    console.log(hand2);
    const exp1 = totalExp(hand1);
    const exp2 = totalExp(hand2);

    const hand1Winner = exp1 > exp2;

    return (
      <div>
        <Pokedex pokemon={hand1} totalExp={exp1} winner={hand1Winner} />
        <Pokedex pokemon={hand2} totalExp={exp2} winner={!hand1Winner} />
      </div>
    );
  }
}

export default Pokegame;
