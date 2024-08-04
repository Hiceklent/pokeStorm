import './home.scss';
import { createHeader } from '../../components/common/header/header';
import { createFooter } from '../../components/modals/pokeGalery/pokeGalery';

export function createHome(listaPokemons, pokeInStorage) {

    if (!pokeInStorage) {
        console.error('No se recibió un Pokémon válido para mostrar.');
        return;
    }
    const main = document.createElement('main');
    main.classList.add('main-pokemon');
    const header = createHeader();
    const footer = createFooter(listaPokemons);

    main.innerHTML = /*html*/ `
    <div class="main-pokemon__nameBox">
    <i class="main-pokemon__typeIcon" id="pokemon-type-icon">O.</i>
    <h2 id="pokemon-name"class="main-pokemon__name">${pokeInStorage.name}</h2>
    </div>
    <figure>
    <img id="pokemon-image"  class="main-pokemon__image" src="${pokeInStorage.image}" alt="${pokeInStorage.name}">
    </figure>
    <section class="main-pokemon__detailsBox">
            <div class="main-pokemon__type">
                <h3 class="main-pokemon__typeTitle">Type</h3>
                <ul id="pokemon-types" class="main-pokemon__typeList">
                    ${pokeInStorage.types.map(type => `<li class="main-pokemon__typeItem pokemonType--${type}">${type}</li>`).join('')}
            <div class="main-pokemon__stats">
                <h3 class="main-pokemon__statsTitle">Stats</h3>
                <ul id="pokemon-stats" class="main-pokemon__statsList">
                    ${pokeInStorage.stats.map(stat => `<li class="main-pokemon__statsItem">${stat.name}: ${stat.baseStats}</li>`).join('')}
                </ul>
            </div>
    </section>
    `;

    document.body.innerHTML = '';
    document.body.prepend(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}
