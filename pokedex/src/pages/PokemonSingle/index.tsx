import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import PokemonApiService from "../../services/PokemonApiService";
import { useParams } from "react-router-dom";
import PokemonTypes from "../../types/PokemonTypes";
import Gallery from "../../components/Gallery";
import PokemonDetails from "../../components/PokemonDetails";
import './style.css';

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
                    <section id='main-info'>
                        <div className="gallery-container">
                            <Gallery images={images} />
                        </div>
                        <div className="details-container">
                            <PokemonDetails pokemon={pokemon} />
                        </div>
                       
                    </section>
                        
                )
            }
            
        </MainLayout>
        
    );
}

export default PokemonSingle;