import React, { useEffect, useState } from 'react';
import './App.css';
import Pokedex from '../Pokedex/Pokedex';
import { pokemonData } from '../../data/pokemonData';
import { PokemonSchema, SpritesSchema, initPokemonSchema } from '../types/pokemonSchema';

function App() {
    const [allPokemon, setAllPokemon] = useState<PokemonSchema[]>([]);
    const [filteredPokemon, setFilteredPokemon] = useState<PokemonSchema[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonSchema | null>(null);

    const patchPokemonData = (pokemon: initPokemonSchema[]) => {
        const patchedPokemon = pokemon.map((poke) => {
            let parsedSprites: SpritesSchema = {
                normal: undefined,
                animated: undefined
            };
            try {
                parsedSprites = poke.sprites && JSON.parse(poke.sprites);
            } catch (error) {
                console.log('Error parsing sprites:', error);
            }
            const patchedPoke: PokemonSchema = {
                ...poke,
                sprites: parsedSprites
            };

            return patchedPoke;
        });
        return patchedPokemon;
    }

    useEffect(() => {
        // patch stringified sprites
        const patchedPokemon: PokemonSchema[] = patchPokemonData(pokemonData);

        // Update state with patched data
        setAllPokemon(patchedPokemon);
        setFilteredPokemon(patchedPokemon);
    }, []);

    const handleInputChange = (input: string) => {
        // Filter the searched pokemon
        const filteredPokemon = allPokemon.filter((poke: PokemonSchema) => {
            return (
                poke.name && poke.name.toLowerCase().includes(input.toLowerCase())
            )
        })
        setFilteredPokemon(filteredPokemon)
    };

    const handleClick = (pokemonName: string) => {
        const selectedPokemon = allPokemon.find((poke: PokemonSchema) => poke.name === pokemonName);
        setSelectedPokemon(selectedPokemon || null);
    };

    return (
        <div className='App'>
            <h1>Pokédex</h1>
            <Pokedex filteredPokemon={filteredPokemon} selectedPokemon={selectedPokemon} onClicked={handleClick} onInputChange={handleInputChange} />
        </div>
    )
};

export default App;
