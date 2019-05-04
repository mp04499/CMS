import React, { Component } from 'react';
import Pokecard from './Pokecard';
import '../css/Pokedex.css';

class Pokedex extends Component {

  render() {
    const pokes = this.props;
    return (
      <div>
        <h1>Total EXP: {pokes.totalExp}</h1>
      <div className={'Pokedex'}>
        {pokes.pokemon.map(p =>

            <Pokecard key={p.id} name={p.name} id={p.id} type={p.type} exp={p.base_experience}/>
        )}

      </div>
        <p className={'Pokedex-winner'}>{pokes.winner ? "This Hand Wins!" : null}</p>
      </div>
    )
  }

}

export default Pokedex;
