import ConfigTypes from './ConfigTypes';
import SeoTypes from './SeoTypes';

class BlogConfigService {
  private config: ConfigTypes;
  private seo: { [path: string]: SeoTypes };

  constructor() {
    this.config = {
      name: 'Pokedex Fuleira',
      postsPerPage: 15,
      theme: 'light',
      footerText: 'Nenhum direito reservado',
      featuredPokemons: ['pikachu', 'charmander'],
    };

    this.seo = {
      home: {
        title: 'Pokedex Fuleira',
        description: 'Só mais uma pokedex genérica que ninguém aguenta mais',
      },
    };
  }

  // Exemplo de método assíncrono para pegar o nome do blog
  async getBlogName() {
    // Simulando uma chamada de API
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(this.config.name);
      }, 1000); // Simulando o tempo de resposta da API
    });
  }

  async getPostsPerPage() {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(this.config.postsPerPage);
      }, 1000);
    });
  }

  async getTheme() {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(this.config.theme);
      }, 1000);
    });
  }

  async getFeaturedPokemons() {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        resolve(this.config.featuredPokemons);
      }, 1000);
    });
  }

  async getFooterText() {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(this.config.footerText);
      }, 1000);
    });
  }

  async getSeo(page: string) {
    return new Promise<SeoTypes | undefined>((resolve) => {
      setTimeout(() => {
        resolve(this.seo[page]);
      }, 1000);
    });
  }

  // Métodos para alterar configurações (pode ser assíncrono se também vierem de uma API)
  async setBlogName(name: string) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.config.name = name;
        resolve();
      }, 1000);
    });
  }

  async setPostsPerPage(postsPerPage: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.config.postsPerPage = Math.floor(postsPerPage);
        resolve();
      }, 1000);
    });
  }

  async setTheme(theme: 'light' | 'dark') {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.config.theme = theme;
        resolve();
      }, 1000);
    });
  }

  async setFeaturedPokemons(pokemons: string[]) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.config.featuredPokemons = pokemons;
        resolve();
      }, 1000);
    });
  }

  async setFooterText(footerText: string) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.config.footerText = footerText;
        resolve();
      }, 1000);
    });
  }

  async setSeo(page: string, settings: SeoTypes) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.seo[page] = settings;
        resolve();
      }, 1000);
    });
  }
}

export default new BlogConfigService();
