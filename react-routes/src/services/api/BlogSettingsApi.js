function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class BlogSettingsApi {
  static async getMainMenuItems() {
    return [
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
  }

  static async getPaginationSettings() {
    return {
      itemsPerPage: 10,
      maxVisiblePages: 5,
      showFirstAndLastPages: false,
    };
  }
}

export default BlogSettingsApi;
