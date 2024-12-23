function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class BlogSettingsApi {
  static mainMenuItems = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'Pokemons',
      route: '/pokemons',
    },
    {
      title: 'Tipos',
      route: '/types',
    },
    {
      title: 'Regiões',
      route: '/regions',
    },
  ];

  static async getMainMenuItems() {
    await sleep(1000);
    return this.mainMenuItems;
  }
}

export default BlogSettingsApi;
