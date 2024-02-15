
import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import { PokemonSchema } from '../types/pokemonSchema';

interface PokemonListProps {
    filteredPokemon: PokemonSchema[];
    onClicked: (pokemonName: string) => void;
}

const PokemonList = ({ filteredPokemon, onClicked }: PokemonListProps) => {
    return (
        <div className='poke-list'>
            {filteredPokemon.map((pokemon) => {
                if (pokemon.name !== undefined) {
                    return (
                        <PokemonCard onClicked={onClicked} key={pokemon.id} name={pokemon.name} spriteUrl={pokemon.sprites.normal} />
                    )
                }
                return null;
            })}
        </div>
    )
};

export default PokemonList;