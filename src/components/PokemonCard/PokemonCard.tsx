import './PokemonCard.css';

interface PokemonCardProps {
    spriteUrl?: string;
    name: string;
    onClicked: (pokemonName: string) => void;
}

const PokemonCard = ({ spriteUrl, name, onClicked }: PokemonCardProps) => {
    return (
        <div onClick={() => onClicked(name)} className='pokemoncard'>
            <img className="pokemon-sprite" src={spriteUrl} alt="pokemonCard" />
            <p className='font'>{name}</p>
        </div>
    )
};

export default PokemonCard;