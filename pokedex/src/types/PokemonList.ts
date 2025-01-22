import PokemonNameUrl from "./PokemonNameUrl"

interface PokemonList{
    count: number,
    next: string | null,
    previous: string | null
    results: PokemonNameUrl[]
}

export default PokemonList