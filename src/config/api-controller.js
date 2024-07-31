import { getData } from "/src/services/axios-service.js";

// URL API
//Traer 5 pokemon
const URL_API ='https://pokeapi.co/api/v2/pokemon?limit=5&offset=0'


// Function
async function getPokes() {
    try {
        const response = await getData(URL_API);
        const pokeData = await response.data.results;
        return pokeData;

    } catch (error) {
        console.error(error);
        return null;
    }

};



export { getPokes }