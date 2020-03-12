import React, { useEffect, useState } from 'react';
import './ArrayPokemon.css'
import CardPok from '../../components/CardPok/CardPok';

const TraerPokemons = () => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(async () => {setPokemonFetch()}, []);

    const setPokemonFetch = async () => {
        const PokeArr = []
        for (let contador = 1; contador <=150; contador++) {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + contador)
            const MyJson = await response.json()
            PokeArr.push({
                name: MyJson.name,
                id: MyJson.id,
                type: MyJson.types[0].type.name,
                img: MyJson.sprites.front_default
            });
        }
        setPokemon(PokeArr)
    }
    return (
        <div className='divpokedex'>
            {pokemon.length > 0 ?
                pokemon.map(poke => {
                    return (
                    <CardPok
                    id={poke.id}
                    name={poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}
                    type={poke.type}
                    img={poke.img}
                    />)
                }):
                <p>Loading</p>
            }
        </div>
    )
}

export default TraerPokemons