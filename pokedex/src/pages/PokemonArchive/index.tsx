import { useEffect, useState } from "react"
import SeoTypes from "../../types/SeoTypes";
import BlogConfigService from "../../services/BlogConfigService";
import PokemonApiService from "../../services/PokemonApiService";
import { useSearchParams } from "react-router-dom";
import PokemonListTypes from "../../types/PokemonListTypes";
import Head from "../../components/Head";
import MainLayout from "../../layouts/MainLayout";


function PokemonArchive(){
    const [searchParams] = useSearchParams();
    const [pokemonList, setPokemonList] = useState<PokemonListTypes | undefined>()
    const [seo, setSeo] = useState<SeoTypes | undefined>();

    const page = searchParams.get('page')

    useEffect(() => {
        async function setup() {
          const seo = await BlogConfigService.getSeo('home');
					setSeo(seo)

          const postsPerPage = await BlogConfigService.getPostsPerPage()
          const pokemonList = await PokemonApiService.getPokemonsByPage(page, postsPerPage)
					setPokemonList(pokemonList)
          
        }
    
        setup();
      });

    return (
        <>
          <Head seo={seo} />
          <MainLayout>
            {
              pokemonList ? (
                (
                  pokemonList.results.map((pokemon)=>(
                    <h2>{pokemon.name}</h2>
                  ))
                )
              ):(
                <div>Carregando</div>
              )
            }
          </MainLayout>
        </>
        
    )
}


export default PokemonArchive