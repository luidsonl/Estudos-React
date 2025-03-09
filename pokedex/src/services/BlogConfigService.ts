import BlogConfigTypes from '../types/BlogConfigTypes';
import MenuTypes from '../types/MenuTypes';
import SeoTypes from '../types/SeoTypes';

class BlogConfigService {
  private config: BlogConfigTypes;
  private seo: { [path: string]: SeoTypes };
  private cache: Map<string, { data: any; expiresAt: number }>;
  private cacheTTL: number;

  constructor() {
    this.config = {
      name: 'Pokedex Fuleira',
      postsPerPage: 15,
      footerText: 'Nenhum direito reservado',
      featuredPokemons: ['pikachu', 'charmander'],
      mainMenuItems: {
        name: 'Main menu',
        items:[
          {
            title: 'Home',
            path: '/'
          },
          {
            title: 'All pokemons',
            path: '/pokemon/'
          }
        ]
      }
    };

    this.seo = {
      home: {
        title: 'Pokedex Fuleira',
        description: 'Só mais uma pokedex genérica que ninguém aguenta mais',
      },
      404: {
        title: 'Não encontrado',
        description:
          'Você sabia Titã, uma das luas de Saturno, o único satélite natural no sistema solar com uma atmosfera densa?',
      },
    };
    this.cache = new Map();
    this.cacheTTL = 600000;
  }

  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }
    this.cache.delete(key);
    return null;
  }

  private setToCache<T>(key: string, data: T) {
    this.cache.set(key, { data, expiresAt: Date.now() + this.cacheTTL });
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

  async getBlogName() {
    return this.getWithCache('name', async () => {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(this.config.name);
        }, 1000);
      });
    });
  }

  async getPostsPerPage() {
    return this.getWithCache('postsPerPage', async () => {
      return new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(this.config.postsPerPage);
        }, 1000);
      });
    });
  }


  async getFeaturedPokemons() {
    return this.getWithCache('featuredPokemons', async () => {
      return new Promise<string[]>((resolve) => {
        setTimeout(() => {
          resolve(this.config.featuredPokemons);
        }, 1000);
      });
    });
  }
  async getMainMenuItems() {
    return this.getWithCache('mainMenuItems', async () => {
      return new Promise<MenuTypes | undefined >((resolve) => {
        setTimeout(() => {
          resolve(this.config.mainMenuItems);
        }, 1000);
      });
    });
  }

  async getFooterText() {
    return this.getWithCache('footerText', async () => {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(this.config.footerText);
        }, 1000);
      });
    });
  }

  async getSeo(page: string) {
    const cacheKey = `seo-${page}`;
    return this.getWithCache(cacheKey, async () => {
      return new Promise<SeoTypes | undefined>((resolve) => {
        setTimeout(() => {
          resolve(this.seo[page]);
        }, 1000);
      });
    });
  }
}

export default new BlogConfigService();
