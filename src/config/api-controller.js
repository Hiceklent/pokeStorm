import { getData } from "/src/services/axios-service.js";

// URL API
const URL_JSON = 'http://localhost:3000/productos/';

const ENDPOINTS = {
    
}


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