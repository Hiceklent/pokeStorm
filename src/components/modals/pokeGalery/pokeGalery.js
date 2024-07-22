import './pokeGalery.scss';
import { getData } from '../../../services/axios-service';

const URL_API = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>&copy; 2024 Mi Sitio Web</p>`;
    return footer;
  }

  export async function getPokemon() {
    try {
      const dataPokemon = await getData();
      return dataPokemon;
    } catch (error) {
  
    }
  }