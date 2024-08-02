import axios from 'axios';

// GET METHOD

export const getData = async (URL_API) => {
    try {
        const respuesta = await axios.get(URL_API);
        return respuesta.data.results;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export const getPokemonDetails = async (url) => {
    try {
      const response = await axios.get(url);
      const { id, name, sprites, height, weight, types, abilities } = response.data;
      return {
        id,
        name,
        image: sprites.other.home.front_default,
        height,
        weight,
        types: types.map(typeInfo => typeInfo.type.name),
        abilities: abilities.map(abilitiesInfo => abilitiesInfo.ability.name),
      };
    } catch (error) {
      console.error('Error fetching pokemon details:', error);
      return null;
    }
  };
