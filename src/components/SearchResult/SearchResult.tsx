import React from 'react';
import './SearchResult.css';
import { PokemonSchema } from '../types/pokemonSchema';


interface SearchResultProps {
    selectedPokemon: PokemonSchema | null;
}

const SearchResult = ({ selectedPokemon }: SearchResultProps) => {

    const { name, id, height, weight, base_experience, sprites } = selectedPokemon || {};

    return (
        <div className='poke-card'>
            {
                selectedPokemon ? (
                    <div>
                        <img className="pokemon-animated" src={sprites?.animated || sprites?.normal} alt="sprite" />
                        <p>Name: {name}</p>
                        <p>Id: {id}</p>
                        <p>Weight: {weight}</p>
                        <p>Height: {height}</p>
                        <p>Base Experience:{base_experience}</p>
                    </div>

                ) : (
                    <h2>Welcome to the Pokedex {/*Put pokeball image here */}</h2>
                )
            }
        </div>
    )
};

export default SearchResult;