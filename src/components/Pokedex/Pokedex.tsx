import React from 'react';
import './Pokedex.css';
import SearchResult from '../SearchResult/SearchResult';
import SearchBar from '../SearchBar/SearchBar';
import PokemonList from '../PokemonList/PokemonList';
import { PokemonSchema } from '../types/pokemonSchema';


interface PokedexProps {
    filteredPokemon: PokemonSchema[];
    selectedPokemon: PokemonSchema | null;
    onInputChange: (inputValue: string) => void;
    onClicked: (pokemonName: string) => void;
}

const Pokedex = ({ filteredPokemon, selectedPokemon, onInputChange, onClicked }: PokedexProps) => {

    return (
        <div className='container'>
            <div className="list-container">
                <SearchBar onInputChange={onInputChange} />
                <PokemonList onClicked={onClicked} filteredPokemon={filteredPokemon} />
            </div>
            <div className="searchresult-container">
                <SearchResult selectedPokemon={selectedPokemon} />
            </div>
        </div>
    )
};

export default Pokedex;