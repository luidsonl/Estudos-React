import BlogSettingsApi from './BlogSettingsApi';

class PokemonApi {
  static baseUrl = 'https://pokeapi.co/api/v2/';
  static pokemonUrl = 'pokemon/'

  static async queryAllPokemons(page) {
    let url = this.baseUrl + this.pokemonUrl;
    const paginationSettings = await BlogSettingsApi.getPaginationSettings();

    const itemsPerPage = paginationSettings.itemsPerPage;

    let hasUrlParams = false;

    if (itemsPerPage) {
      url += `?limit=${itemsPerPage}`;
      hasUrlParams = true;
    }

    if (page) {
      if (hasUrlParams) {
        url += '&';
      } else {
        url += '?';
      }
      url += `offset=${(page - 1) * itemsPerPage}`;
    }

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }


  static async getPokemonById(id){
    const url = this.baseUrl + this.pokemonUrl + id

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  static getPokemonIdByUrl(url){
    const id = url.split('/').slice(-2, -1)[0];
    return id;
  }

  static async getPokemonByUrl(url){
    const id = this.getPokemonIdByUrl(url);
    const pokemon = await this.getPokemonById(id);
    return pokemon
  }

  

  static getPokemonUrlById(id){
    const url = this.baseUrl + this.pokemonUrl + id;
    return url;
  }

  static getPokemonImageFromId(id) {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return imageUrl;
  }

}

export default PokemonApi;
