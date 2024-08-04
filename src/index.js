import './styles/main.scss';
import { getPokes } from './config/api-controller.js';
import { createHome } from './pages/home/home';
import { getToStorage, setToStorage } from './utils/localStorageTools.js';

const pokemonKey = 'pokemon';

const appRun = async () => {
    try {
        const listaPokemons = await getPokes();
        const pokeInStorage = getToStorage(pokemonKey);


        if (pokeInStorage === null) {
            const defaultPokemon = listaPokemons[0];
            setToStorage(pokemonKey, defaultPokemon);
        }

        createHome(listaPokemons, pokeInStorage);

    } catch (error) {
        console.error('Error al inicar la aplicacion', error);
    }
}

appRun()



