import './pokeGalery.scss';
import { getData } from '../../../services/axios-service';

export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>&copy; 2024 Mi Sitio Web</p>`;
    return footer;
  }

document.addEventListener('DOMContentLoaded', () => {
    // Inyecta el HTML del modal en el cuerpo del documento
    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal" id="pokedex-modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>Pokedex Types</h2>
                <div class="pokemon-list">
                    <!-- Aquí se listarán los tipos de Pokémon -->
                </div>
            </div>
        </div>
    `);

    const modal = document.getElementById('pokedex-modal');
    const openModalBtn = document.querySelector('.open-modal-btn');
    const closeModalBtn = modal.querySelector('.close-btn');
    const pokemonList = modal.querySelector('.pokemon-list');

    // Función para abrir el modal
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('show');
        fetchPokemonTypes();
    });

    // Función para cerrar el modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Cierra el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Función para obtener los tipos de Pokémon desde la API
    async function fetchPokemonTypes() {
        try {
            const response = await fetch(URL_API);
            const data = await response.json();
            displayPokemonTypes(data.results);
        } catch (error) {
            console.error('Error fetching Pokémon types:', error);
        }
    }

    // Función para mostrar los tipos de Pokémon en el modal
    function displayPokemonTypes(types) {
        pokemonList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos elementos
        types.forEach(type => {
            const card = document.createElement('div');
            card.classList.add(' pokemon-card');
            card.textContent = type.name;
            pokemonList.appendChild(listItem);
        });
    }
});

