const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
const POKEMONS_URL='https://pokeapi.co/api/v2/pokemon/?limit=20000'

const fetchPokemon = async (pokemonId) => {
    const pokemonResponse = await fetch(`${POKEMON_API_URL}/${pokemonId}`);
    const pokemonData = await pokemonResponse.json();

    return pokemonData;
}
const allPokemons = async () => {
    const pokemonResponse = await fetch(`${POKEMONS_URL}`);
    const pokemonData = await pokemonResponse.json();
    console.log(pokemonData)
    return pokemonData;
};
export {fetchPokemon,allPokemons};


