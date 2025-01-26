interface PokemonListTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export default PokemonListTypes;
