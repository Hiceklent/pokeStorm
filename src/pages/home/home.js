import './home.scss';
import { createHeader } from '../../components/common/header/header';
import { createFooter } from '../../components/modals/pokeGalery/pokeGalery';
import { addTypeIcon } from './module/svgTypesControls';

export async function createHome(listaPokemons, pokeInStorage) {

    if (!pokeInStorage) {
        console.error('No se recibió un Pokémon válido para mostrar.');
        return;
    }
    const main = document.createElement('main');
    main.classList.add('main-pokemon');
    const header = createHeader();
    const footer = createFooter(listaPokemons);

    const typeIconContainer = document.createElement('figure');
    typeIconContainer.classList.add('main-pokemon__typeIcon');
    typeIconContainer.id = 'pokemon-type-icon-container';


    main.innerHTML = /*html*/ `

    <div class="main-pokemon__nameBox">
    ${typeIconContainer.outerHTML}
    <h2 id="pokemon-name"class="main-pokemon__name">${pokeInStorage.name}</h2>
    </div>

    <figure  class="main-pokemon__image" >
    <img id="pokemon-image" src="${pokeInStorage.image}" alt="${pokeInStorage.name}">
    </figure>


    <section class="main-pokemon__detailsBox">

            <div class="main-pokemon__abilities">
                <h3 class="main-pokemon__abilitiesTitle">Abilities</h3>
                <ul id="pokemon-abilities" class="main-pokemon__abilitiesList">
                    ${pokeInStorage.abilities.map(ability => `<li class="main-pokemon__abilitiesItem">${ability}</li>`).join('')}
                </ul>
            </div>


            <div class="main-pokemon__type">
                <h3 class="main-pokemon__typeTitle">Type</h3>
                <ul id="pokemon-types" class="main-pokemon__typeList">
                    ${pokeInStorage.types.map(type => `<li class="main-pokemon__typeItem pokemonType--${type}">${type}</li>`).join('')}
                </ul>
            </div>

            <div class="main-pokemon__weightHeight">
            <h3 class="main-pokemon__weightHeightTitle">Weight/Height</h3>
            <ul class="main-pokemon__weightHeightList">
                <li class="main-pokemon__weightHeightItem" id ="pokemon-weight">${pokeInStorage.weight} kg</li>
                <li class="main-pokemon__weightHeightItem"id ="pokemon-height">${pokeInStorage.height} m</li>
            </ul>
        </div>

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



    await addTypeIcon(pokeInStorage.types[0]);
}


