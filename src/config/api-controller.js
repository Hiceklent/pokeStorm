import { getData } from "/src/services/axios-service.js";

// URL API
//Traer 5 pokemon
const URL_API ='https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'


// Function
async function getPokes() {
    try {
        const Data = await getData(URL_API);
        return Data;
    } catch (error) {
        console.error(error);
        return null;
    }

};



export { getPokes }