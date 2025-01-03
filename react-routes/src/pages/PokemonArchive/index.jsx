import { useState } from 'react';
import { useEffect } from 'react';
import PokemonApi from '../../services/api/PokemonApi';
import PokemonCard from '../../components/PokemonCard';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const PokemonArchive = () => {
  const archiveType = 'pokemon';

  const [pokemons, setPokemons] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      try {
        const data = await PokemonApi.queryAllPokemons(currentPage);
        setTotalItems(data.count);
        setPokemons(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemons();
  }, [currentPage]);

  if (loading) {
    return <div>Carregando Lista...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section>
        <h1>Pokemons:</h1>
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>
              <PokemonCard endpoint={pokemon.url} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Pagination totalItems={totalItems} />
      </section>
    </>
  );
};

export default PokemonArchive;
