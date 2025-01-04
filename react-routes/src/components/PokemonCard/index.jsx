import { Link } from 'react-router-dom';
import PokemonApi from '../../services/api/PokemonApi';
import { useEffect, useState } from 'react';

const PokemonCard = ({ endpoint }) => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    async function setData() {
      try {
        const pokemonData = await PokemonApi.getPokemonByUrl(endpoint);
        setPokemon(pokemonData);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    setData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Link to={`${pokemon.name}`}>
      <div className="pokemon-card">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <ul>
          {pokemon.types.map((type, index)=>(
            <li key={index}>
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default PokemonCard;
