import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import PokemonApiService from "../../services/PokemonApiService";
import { useParams } from "react-router-dom";
import PokemonTypes from "../../types/PokemonTypes";

function PokemonSingle(){
    const [pokemon, setPokemon] = useState<PokemonTypes | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const { id } = useParams();
    
    useEffect(() => {
        async function fetchPokemon() {
            if (id) {
                const pokemon = await PokemonApiService.getPokemonByName(id);
                setPokemon(pokemon);
                setLoading(false);
            }
        }

        fetchPokemon();
    }, [id]);
    
    if (loading) {
        return <p>Carregando...</p>;
    }
    
    return (
        <MainLayout>
            {
                loading && <p>Carregando...</p>
            }
            {
                pokemon && (
                    <>
                        <h1>{pokemon.name}</h1>


                    </>
                )
            }
            
        </MainLayout>
        
    );
}

export default PokemonSingle;