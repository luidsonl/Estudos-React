import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SeoTypes from '../../types/SeoTypes';
import BlogConfigService from '../../services/BlogConfigService';
import PokemonApiService from '../../services/PokemonApiService';
import PokemonListTypes from '../../types/PokemonListTypes';
import Head from '../../components/Head';
import MainLayout from '../../layouts/MainLayout';
import PokemonCard from '../../components/PokemonCard';
import Pagination from '../../components/Pagination';
import './style.css';

function PokemonSearch() {
  const { term } = useParams<{ term: string }>();
  const [searchParams] = useSearchParams();
  const [pokemonList, setPokemonList] = useState<PokemonListTypes | undefined>();
  const [postsPerPage, setPostsPerPage] = useState<number>(0);
  const [seo, setSeo] = useState<SeoTypes | undefined>();
  const currentPage = parseInt(searchParams.get('page') || '1') || 1;

  useEffect(() => {
    async function loadConfig() {
      const seo = await BlogConfigService.getSeo('home');
      setSeo(seo);
  
      const posts = await BlogConfigService.getPostsPerPage();
      setPostsPerPage(posts);
    }
  
    loadConfig();
  }, []);
  
  useEffect(() => {
    if (postsPerPage > 0) {
      async function fetchPokemons() {
        if (term) {
          const pokemonList = await PokemonApiService.searchPokemons(
            term,
            currentPage,
            postsPerPage
          );
          setPokemonList(pokemonList);
        } else {
          const pokemonList = await PokemonApiService.getPokemonsByPage(
            currentPage,
            postsPerPage
          );
          setPokemonList(pokemonList);
        }
      }
  
      fetchPokemons();
    }
  }, [currentPage, postsPerPage, term]);

  return (
    <>
      <Head seo={seo} />
      <MainLayout>
        <section id='page-title'>
          <h2>Resultados para: {term}</h2>
        </section>
        <section id='pokemon-list'>
          {pokemonList ? (
            pokemonList.results.map((pokemon, index) => (
              <PokemonCard key={index} url={pokemon.url}/>
            ))
          ) : (
            <div>Carregando</div>
          )}
        </section>
        <section id='pagination'>
          {pokemonList ? (
            <Pagination
              totalPages={Math.ceil(pokemonList.count / postsPerPage)}
              currentPage={currentPage}
            />
          ) : null}
        </section>
      </MainLayout>
    </>
  );
}

export default PokemonSearch;