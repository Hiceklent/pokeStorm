import './pokeGalery.scss';
import { getPokes } from '../../../config/api-controller.js';

const listaPokemones = await getPokes();

function scrollContent(amount) {
  var pokelist = document.getElementById('pokelist');
  pokelist.scrollTop += amount;
}

export function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('pokeGalery')
    // boton y la seccion 
    footer.innerHTML = /*html*/ ` 
            <button class="pokeGalery__boton"  id="open-modal">Up</button>
                    <section class="pokeCard__containers" id="pokelist">
                            <article class="pokeCard"  id="cardPokemon" >
                                    <span class="pokeCard__id">#001</span>
                                    <figure class="pokeCard__img">
                                    <svg width="168.49" height="168.49" viewBox="255.755 873.76 168.49 168.49" fill="none">
                                    </svg>
                                    </figure>
                                </article>
                    </section> `;


    return footer;
}

console.log(createFooter);

// document.addEventListener('DOMContentLoaded', () => {
// // Inyecta el HTML del modal en el cuerpo del documento
// document.body.insertAdjacentHTML('beforeend', ` `
// );

// const modal = document.getElementById('pokedex-modal');
// const openModalBtn = document.querySelector('.open-modal-btn');
// const closeModalBtn = modal.querySelector('.close-btn');
// const pokemonList = modal.querySelector('.pokemon-list');

// // Función para abrir el modal
// openModalBtn.addEventListener('click', () => {
//     modal.classList.add('show');
//     fetchPokemonTypes();
// });

// // Función para cerrar el modal
// closeModalBtn.addEventListener('click', () => {
//     modal.classList.remove('show');
// });

// // Cierra el modal al hacer clic fuera del contenido del modal
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.classList.remove('show');
//     }
// });

// // Función para obtener los tipos de Pokémon desde la API
// async function fetchPokemonTypes() {
//     try {
//         const response = await fetch(URL_API);
//         const data = await response.json();
//         displayPokemonTypes(data.results);
//     } catch (error) {
//         console.error('Error fetching Pokémon types:', error);
//     }
// }

// // Función para mostrar los tipos de Pokémon en el modal
// function displayPokemonTypes(types) {
//     pokemonList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos elementos
//     types.forEach(type => {
//         const card = document.createElement('div');
//         card.classList.add(' pokemon-card');
//         card.textContent = type.name;
//         pokemonList.appendChild(listItem);
//     });
// }
// });

