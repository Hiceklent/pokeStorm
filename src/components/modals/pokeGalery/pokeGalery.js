import './pokeGalery.scss';
import { getData } from '../../../services/axios-service';

export function createFooter() {
    const footer = document.createElement('footer');

    footer.innerHTML = `<p>&copy; 2024 Mi Sitio Web</p>
    <button class="open-modal-btn">Open Pokedex</button>
    `;


    return footer;
}

document.addEventListener('DOMContentLoaded', () => {
    // Inyecta el HTML del modal en el cuerpo del documento
    document.body.insertAdjacentHTML('beforeend', `
        <footer>
            <div>
                <hr>
                    <section class="pokelist">
                        <article>
                            <div class="controls">
                                <button class="btn-up">Up</button>
                                <button class="btn-down">Down</button>
                                             <div class="pokemon" >
                                    <div class ="numberP">
                                        <p><span>#001</span></p>
                                    </div>
                                    <div>
                                    <svg width="168.49" height="168.49" viewBox="255.755 873.76 168.49 168.49" fill="none">
                                    </svg>
                                    </div>
                                </div>
                     <div class="pokemon" >
                                    <div class ="numberP">
                                        <p><span>#115</span></p>
                                    </div>
                                    <div>
                                    <svg width="168.49" height="168.49" viewBox="255.755 873.76 168.49 168.49" fill="none">
                                    </svg>
                                    </div>
                                </div>
                     <div class="pokemon" >
                                    <div class ="numberP">
                                        <p><span>#009</span></p>
                                    </div>
                                    <div>
                                    <svg width="168.49" height="168.49" viewBox="255.755 873.76 168.49 168.49" fill="none">
                                    </svg>
                                    </div>
                                </div>
                                <div class="pokemon" >
                                    <div class ="numberP">
                                        <p><span>#119</span></p>
                                    </div>
                                    <div>
                                    <svg width="168.49" height="168.49" viewBox="255.755 873.76 168.49 168.49" fill="none">
                                    </svg>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
            </div>
        </footer>`
    );

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

