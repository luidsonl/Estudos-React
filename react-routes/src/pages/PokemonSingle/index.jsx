import { Link, useParams } from 'react-router-dom';
import PokemonApi from '../../services/api/PokemonApi';
import { useEffect, useState } from 'react';



const PokemonSingle = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id: PokemonId } = useParams();
  const [person, setPerson] = useState({
    name: 'Alice',
    age: 30,
    city: 'São Paulo'
  });

  useEffect(()=>{
    async function setData() {
      try {
        const pokemonData = await PokemonApi.getPokemonById(PokemonId);
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

  if(!pokemon){
    return (
      <div>
        Nenhum pokemon encontrado
      </div>
    );
  }

  return (
    <>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <h2>Tipo</h2>
      <ul>
        {pokemon.types.map((type, index)=>(
          <li key={index}>
            {type.type.name}
          </li>
        ))}
      </ul>
      <h2>Imagens</h2>
      <ul>
        {Object.keys(pokemon.sprites).map(key => (
          <div key={key}>
            <h3>{key}</h3>
            <img src={pokemon.sprites[key]} alt={key}/>
          </div>
        ))}
      </ul>
      <h2>Som</h2>
      <ul>
        {Object.keys(pokemon.cries).map(key => (
          <div key={key}>
            <h3>{key}</h3>
            <audio controls>
              <source src={pokemon.cries[key]} type="audio/ogg"/>
              Seu navegador não suporta a tag de áudio.
            </audio>
          </div>
      ))}
      </ul>
    </>
  );
};

export default PokemonSingle;
