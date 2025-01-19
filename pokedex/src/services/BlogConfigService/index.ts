class BlogConfigService {
  private config: { [key: string]: string | number | string[] } = {};

  constructor() {
    this.config = {
      name: 'Pokedex Fuleira',
      postsPerPage: 15,
      theme: 'light',
      footerText: 'Nenhum direito reservado',
      featuredPokemons: ['pikachu', 'charmander'],
    };
  }

  getBlogName() {
    return this.config.name;
  }

  getPostsPerPage() {
    return this.config.postsPerPage;
  }

  getTheme() {
    return this.config.theme;
  }

  getFeaturedPokemons() {
    return this.config.featuredPokemons;
  }

  getFooterText() {
    return this.config.footerText;
  }

  setBlogName(name: string) {
    this.config.name = name;
  }

  setPostsPerPage(postsPerPage: number) {
    this.config.postsPerPage = Math.floor(postsPerPage);
  }

  setTheme(theme: 'light' | 'dark') {
    this.config.theme = theme;
  }

  setFeaturedPokemons(pokemons: string[]) {
    this.config.featuredPokemons = pokemons;
  }

  setFooterText(footerText: string) {
    this.config.footerText = footerText;
  }
}

export default new BlogConfigService();
