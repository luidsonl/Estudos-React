import PokemonTypes from '../../types/PokemonTypes';
import './style.css'



interface PokemonDetailsProps {
  pokemon: PokemonTypes;
}

function PokemonDetails({ pokemon } : PokemonDetailsProps) {
 
  return (
    <div className='pokemon-details'>
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
      <div>
        <table>
          <thead>
            <tr>
              <th><h2>Status</h2></th>
              <th>Base Stat</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.stats.map((status, index) => (
              <tr key={index}>
          <td>{status.stat.name}</td>
          <td>{status.base_stat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        pokemon.cries.latest && (
          <div>
            <h2>Som</h2>
            <audio controls>
              <source src={pokemon.cries.latest} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )
      }
    </div>
  );
};

export default PokemonDetails;