import { useEffect, useState } from 'react';
import PokemonApiService from '../../services/PokemonApiService';
import PokemonTypes from '../../types/PokemonTypes';
import { Link } from 'react-router-dom';

interface Props {
  url: string;
}

function PokemonCard({ url }: Props) {
  const [pokemon, setPokemon] = useState<PokemonTypes | undefined>();

  useEffect(() => {
    async function setup() {
      const pokemon = await PokemonApiService.getPokemonByUrl(url);
      setPokemon(pokemon);
    }

    setup();
  }, []);

  return (
    <article>
      {pokemon ? (
        <Link to={'/pokemon/' + pokemon.id}>
          {pokemon.sprites.front_default ? (
            <img src={pokemon.sprites.front_default} alt='' />
          ) : (
            ''
          )}

          <h1>{pokemon.name}</h1>
        </Link>
      ) : (
        <div>Carregando</div>
      )}
    </article>
  );
}

export default PokemonCard;
