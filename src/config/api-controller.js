import { getData, getPokemonDetails } from "/src/services/axios-service.js";

// URL API
//Traer 5 pokemon
const URL_API = 'https://pokeapi.co/api/v2/pokemon'


// Function

const getPokes = async (limit = 20) => {

    try {
       // const newArrayForAllPokemonDetails = []
        const url = `${URL_API}?limit=${limit}`;
        const pokemons = await getData(url);
       /*  console.log("pokemons 1", pokemons)
        for(let i = 0; i < limit ; i++){
            const response =  await getPokemonDetails(pokemons[i].url)
            console.log("resultados detalles dentro del for", response)
            newArrayForAllPokemonDetails.push(response)
        }

        return newArrayForAllPokemonDetails */
        const detailedPokemons = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon.url)));
        return detailedPokemons.filter(pokemon => pokemon !== null); 
        
    } catch (error) {
        console.error(error)

        const body = document.createElement("body");
        body.innerHTML = `<h1>Hubo un error ${error}</h1>`

        document.body.appendChild(body)
    }

};

const getPokesByName = async (name) => {
    try {
        const url = `${URL_API}?limit=100000&offset=0`;
        const pokemon = await getData(url);
        console.log(pokemon);
        const pokemonFilter = pokemon.find(pokemon => pokemon.name === name);
        console.log(pokemonFilter);
        
        return pokemonFilter
    } catch (error) {
        console.error(error)
    }
}

getPokesByName('poke')

export { getPokes }