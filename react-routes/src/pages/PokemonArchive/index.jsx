import { useState } from 'react';
import { useEffect } from 'react';
import PokemonApi from '../../services/api/PokemonApi';

const PokemonArchive = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      try {
        const data = await PokemonApi.getPokemons();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);

        console.log(pokemons);
      }
    }

    fetchPokemons();
  }, []);

  if (loading) {
    return <div>Carregando Lista...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Pokemons:</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <h2>{pokemon.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonArchive;
