class PokemonApi {
  static baseUrl = 'https://pokeapi.co/api/v2/';

  static async getPokemons(pokemonsPerPage, page) {
    let url = this.baseUrl + 'pokemon';

    let hasUrlParams = false;

    if (pokemonsPerPage) {
      url += `?limit=${pokemonsPerPage}`;
      hasUrlParams = true;
    }

    if (page) {
      if (hasUrlParams) {
        url += '&';
      } else {
        url += '?';
      }
      url += `offset=${(page - 1) * pokemonsPerPage}`;
    }

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      return data.results;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
}

export default PokemonApi;
