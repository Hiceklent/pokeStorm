import { getData } from "/src/services/axios-service.js";

// URL API
const URL_API ='https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'


// Function
async function getpokes() {
    try {
        const Data = await getData(URL_JSON);
        return Data;
    } catch (error) {
        console.error(error);
        return null;
    }

};



export { getPokes }