import PokemonList from '../types/PokemonListTypes';
import PokemonTypes from '../types/PokemonTypes';
import fetchApi from '../utils/fetchApi';

class PokemonApiService {
  private apiBaseUrl: string;
  private cache: Map<string, { data: any; expiresAt: number; size: number }>;
  private cacheTTL: number;
  private cacheSizeLimit: number;
  private currentCacheSize: number;

  constructor() {
    this.apiBaseUrl = 'https://pokeapi.co/api/v2';
    this.cache = new Map();
    this.cacheTTL = 60000; // 10 minutos
    this.cacheSizeLimit = 20 * 1024 * 1024; // Limite de 20MB
    this.currentCacheSize = 0;
  }

  private getSizeInBytes(obj: any): number {
    return new TextEncoder().encode(JSON.stringify(obj)).length;
  }

  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }
    if (cached) {
      this.currentCacheSize -= cached.size;
    }
    this.cache.delete(key);
    return null;
  }

  private setToCache<T>(key: string, data: T) {
    const dataSize = this.getSizeInBytes(data);
    while (this.currentCacheSize + dataSize > this.cacheSizeLimit) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) {
        const oldest = this.cache.get(oldestKey);
        if (oldest) {
          this.currentCacheSize -= oldest.size;
          this.cache.delete(oldestKey);
        }
        
      }
    }
    this.cache.set(key, { data, expiresAt: Date.now() + this.cacheTTL, size: dataSize });
    this.currentCacheSize += dataSize;
  }

  private async getWithCache<T>(key: string, fetchData: () => Promise<T>): Promise<T> {
    const cachedValue = this.getFromCache<T>(key);
    if (cachedValue !== null) {
      return Promise.resolve(cachedValue);
    } else {
      const data = await fetchData();
      this.setToCache(key, data);
      return data;
    }
  }

  getAllPokemons(): Promise<PokemonList> {
    return this.getWithCache('allPokemons', () => fetchApi(`${this.apiBaseUrl}/pokemon/?limit=100000&offset=0`));
  }

  getPokemonsByPage(page: any = 1, limit: number): Promise<PokemonList> {
    const pageTypes = ['number', 'string'];
    if (!pageTypes.includes(typeof page)) {
      page = 1;
    }
    const offset = (page - 1) * limit;
    const cacheKey = `pokemons-page-${page}-limit-${limit}`;
    return this.getWithCache(cacheKey, () => fetchApi(`${this.apiBaseUrl}/pokemon/?limit=${limit}&offset=${offset}`));
  }

  getPokemonByUrl(url: string): Promise<PokemonTypes> {
    return this.getWithCache(url, () => fetchApi(url));
  }

  getPokemonByName(name: string): Promise<PokemonTypes> {
    const url = `${this.apiBaseUrl}/pokemon/${name}`;
    return this.getWithCache(url, () => fetchApi(url));
  }

  async searchPokemons(searchTerm: string, page: number = 1, limit: number = 20): Promise<PokemonList> {
    const allPokemons = await this.getAllPokemons();
    const filteredPokemons = allPokemons.results.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const offset = (page - 1) * limit;
    const paginatedPokemons = filteredPokemons.slice(offset, offset + limit);

    return {
      next: null,
      previous: null,
      count: filteredPokemons.length,
      results: paginatedPokemons,
    };
  }
}

export default new PokemonApiService();