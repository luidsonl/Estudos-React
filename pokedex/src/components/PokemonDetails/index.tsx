import React from 'react';
import PokemonTypes from '../../types/PokemonTypes';


interface PokemonDetailsProps {
  pokemon: PokemonTypes;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <div>
      <h1 className='h1'>{pokemon.name}</h1>
      <div>
        <h2>Habilidades</h2>
        <ul>
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Tipos</h2>
        <ul>
          {pokemon.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;