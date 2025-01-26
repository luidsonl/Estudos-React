import PokemonList from "../types/PokemonListTypes";
import fetchApi from "../utils/fetchApi";

class PokemonApiService{

    private apiBaseUrl: string;

    constructor(){
        this.apiBaseUrl = 'https://pokeapi.co/api/v2';
    }

    getAllPokemons(): Promise<PokemonList>{
        return fetchApi(`${this.apiBaseUrl}/pokemon/?limit=100000&offset=0`);
    }

    getPokemonsByPage(page: any = 1,limit: number ): Promise<PokemonList>{
        const pageTypes = ['number', 'string']
        if(!pageTypes.includes(typeof page)){
            page = 1
        }
        const offset = (page - 1) * limit
        return fetchApi(`${this.apiBaseUrl}/pokemon/?limit=${limit}&offset=${offset}`);
    }



}

export default new PokemonApiService();