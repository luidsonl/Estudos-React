import { Link } from 'react-router-dom';
import PokemonApi from '../../services/api/PokemonApi';

const PokemonCard = ({ pokemon }) => {
  const pokemonImage = PokemonApi.getPokemonImageFromUrl(pokemon.url);
  const pokemonId = PokemonApi.getPokemonIdFromUrl(pokemon.url);
  const routeUrl = `pokemon/${pokemonId}`;

  return (
    <Link to={pokemonId}>
      <div className="pokemon-card">
        <img src={pokemonImage} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
      </div>
    </Link>
  );
};

export default PokemonCard;
