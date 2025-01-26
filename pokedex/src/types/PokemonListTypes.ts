import PokemonNameUrlTypes from "./PokemonNameUrlTypes"


interface PokemonListTypes{
    count: number,
    next: string | null,
    previous: string | null
    results: PokemonNameUrlTypes[]
}

export default PokemonListTypes