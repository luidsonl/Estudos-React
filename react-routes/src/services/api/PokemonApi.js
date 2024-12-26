import BlogSettingsApi from './BlogSettingsApi';

class PokemonApi {
  static baseUrl = 'https://pokeapi.co/api/v2/';

  static async getPokemons(page) {
    let url = this.baseUrl + 'pokemon';
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
      return data.results;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  static async getTotalCount() {
    let url = this.baseUrl + 'pokemon';

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      return data.count;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  static getPokemonImageFromUrl(url) {
    const id = url.split('/').slice(-2, -1)[0];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return imageUrl;
  }

  static getPokemonIdFromUrl(url) {
    const id = url.split('/').slice(-2, -1)[0];
    return id;
  }
}

export default PokemonApi;
