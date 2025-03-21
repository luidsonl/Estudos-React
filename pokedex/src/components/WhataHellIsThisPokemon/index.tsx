import { useEffect, useState } from "react";
import PokemonApiService from "../../services/PokemonApiService";
import PokemonTypes from "../../types/PokemonTypes";
import './style.css';
import { Link } from "react-router-dom";

function WhataHellIsThisPokemon(){
    const [selectedPokemon, setSelectedPokemon] = useState<null | PokemonTypes>(null);
    const [show, setShow] = useState(false)

    async function setup() {
        const allPokemons = await PokemonApiService.getAllPokemons();

        const length = allPokemons.results.length;
        const randomIndex = Math.floor(Math.random() * length);
        const randomPokemon = allPokemons.results[randomIndex];

        const selectedPokemon = await PokemonApiService.getPokemonByUrl(randomPokemon.url);

        setSelectedPokemon(selectedPokemon)
        setShow(false);

        console.log(selectedPokemon.name)
    }

    useEffect(()=>{
        setup()
    },[])

    return(
        <section className="whatahell">
            {selectedPokemon &&(
                <>
                    <div className="pokemon-image-container">
                        {
                            selectedPokemon.sprites.front_default && (
                                <img onClick={()=>setShow(true)} className={show ? 'show' : 'hide'} src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
                            )
                        }
                    </div>
                    <div className="pokemon-description-container">
                        {
                            show ? (
                                <div className="pokemon-description">
                                    <h1>
                                        {selectedPokemon.name}
                                    </h1>
                                    <div className="button-container">
                                        <Link className="button" to={`/pokemon/${selectedPokemon.name}`}>Ver detalhes</Link>
                                    </div>
                                    <div className="button-container" onClick={setup}>
                                        <div className="button">
                                            Outra vez
                                        </div>
                                        
                                    </div>
                                </div>
                            ) : (
                                <div className="pokemon-description">
                                    <h1>
                                        Quem é esse pokemon??????
                                    </h1>
                                </div>
                            )
                        }
                    </div>
                </>
            )}
        </section>
    )
}

export default WhataHellIsThisPokemon;