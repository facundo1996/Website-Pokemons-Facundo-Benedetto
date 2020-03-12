import React from 'react';
import './Pokedex.css';
import Search from '../../components/Search/Search';
import ArrayPokemon from '../../components/ArrayPokemon/ArrayPokemon';
import CardPok from '../../components/CardPok/CardPok'

const Pokedex = () => (
  <div className="pokedex page">
    <Search />
    <ArrayPokemon />
    <CardPok />
  </div>
);

export default Pokedex;
