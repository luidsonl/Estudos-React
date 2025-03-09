import { useEffect, useState } from 'react';
import PokemonApiService from '../../services/PokemonApiService';
import PokemonTypes from '../../types/PokemonTypes';
import { Link } from 'react-router-dom';
import './style.css';

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
  }, [url]);

  return (
    <article className='pokemon-card'>
      {pokemon ? (
        <Link to={'/pokemon/' + pokemon.name}>
          {pokemon.sprites.front_default ? (
            <div className='card-image'>
              <img
                
                src={pokemon.sprites.front_default}
                alt={pokemon.name}/>
            </div>

          ) : (
            ''
          )}

          <h3 className='pokemon-name'>{pokemon.name}</h3>
        </Link>
      ) : (
        <div>Carregando</div>
      )}
    </article>
  );
}

export default PokemonCard;
