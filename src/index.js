import './styles/main.scss';
import { getPokes } from './config/api-controller.js';
import { createHome } from './pages/home/home';
import { getToStorage, setToStorage } from './utils/localStorageTools.js';

const pokemonKey = 'pokemon';



const appRun = async () => {
    try {
        const listaPokemons = await getPokes();
        console.log('Lista de Pokémon:', listaPokemons);

        const pokeInStorage = getToStorage(pokemonKey);
        console.log(pokeInStorage);


        if (pokeInStorage === null) {
            const defaultPokemon = listaPokemons[0];
            setToStorage(pokemonKey, defaultPokemon);
            console.log('Pokémon predeterminado guardado en storage:', defaultPokemon);

        }

        const pokemonToShow = pokeInStorage || listaPokemons[0];
        createHome(listaPokemons, pokemonToShow);
    }

    catch (error) {
        console.error('Error al iniciar la aplicación', error);
    }
}


appRun();

