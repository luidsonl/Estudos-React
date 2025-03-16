import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import PokemonApiService from "../../services/PokemonApiService";
import { useParams } from "react-router-dom";
import PokemonTypes from "../../types/PokemonTypes";
import Gallery from "../../components/Gallery";

function PokemonSingle(){
    const [pokemon, setPokemon] = useState<PokemonTypes | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [images, setImages] = useState<string[]>([]);

    const { id } = useParams();
    
    useEffect(() => {
        async function fetchPokemon() {
            if (id) {
                const pokemon = await PokemonApiService.getPokemonByName(id);
                setPokemon(pokemon);
                setLoading(false);

                const images = Object.values(pokemon.sprites).filter(url => typeof url === 'string') as string[];
                setImages(images);
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
                        <Gallery images={images} />

                    </>
                )
            }
            
        </MainLayout>
        
    );
}

export default PokemonSingle;