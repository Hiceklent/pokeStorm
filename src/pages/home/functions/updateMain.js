import {addTypeIcon} from '../module/svgTypesControls.js'

export const updateDetailsContent = (pokemon) => {
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonImage = document.getElementById('pokemon-image');
    const pokemonStats = document.getElementById('pokemon-stats');
    const pokemonType = document.getElementById('pokemon-types');
    const pokemonAbilities = document.getElementById('pokemon-abilities');


    // pokemonTypeIcon.src = `../../assets/images/types/${pokemon.types[0]}.svg`;
    pokemonType.textContent = pokemon.types[0];


    pokemonName.textContent = pokemon.name;
    pokemonImage.src = pokemon.image;
    pokemonImage.alt = pokemon.name;
    pokemonAbilities.innerHTML =pokemon.abilities.map(ability => `<li class="main-pokemon__abilitiesItem">${ability}</li>`).join('')
    pokemonType.innerHTML = pokemon.types.map(type => `<li class="main-pokemon__typeItem pokemonType--${type}">${type}</li>`).join('') ;
    pokemonStats.innerHTML = pokemon.stats.map(stat => `<li>${stat.name}: ${stat.baseStats}</li>`).join('');
    addTypeIcon(pokemon.types[0]);
}