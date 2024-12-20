const MainMenuApi = Object.freeze({
    items: [
        {
            title: "Home",
            route: "/",
        },
        {
            title: "Pokemons",
            route: "/pokemons",
        },
        {
            title: "Tipos",
            route: "/types",
        },
        {
            title: "Regiões",
            route: "/regions",
        },
    ],

    getItems() {
        return Promise.resolve(this.items);
    }
});

export default MainMenuApi;
