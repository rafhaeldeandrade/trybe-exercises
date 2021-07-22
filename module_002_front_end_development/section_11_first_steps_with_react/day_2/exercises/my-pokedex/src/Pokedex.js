import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './Pokedex.css';

export default class Pokedex extends React.Component {
  render() {
    const pokeMap = pokemons.map((el, index) => <Pokemon pokemon={el} key={index} />)

    return (
      <div className="pokedex">
        {pokeMap}
      </div>
    );
  }
}