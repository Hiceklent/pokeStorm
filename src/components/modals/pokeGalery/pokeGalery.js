import './pokeGalery.scss';


export  function createFooter(listaPokemons) {
        const footer = document.createElement('footer');
        footer.classList.add('pokeGalery')

        const cardsContainer = document.createElement('section');
        cardsContainer.classList.add('pokeCard__containers');
        cardsContainer.id = 'pokelist';


        listaPokemons.forEach(pokemon => {
                const pokeCard = createCards(pokemon);
                cardsContainer.appendChild(pokeCard);
        });

        footer.innerHTML = /*html*/ ` 
                <button class="pokeGalery__boton"  id="open-modal">
                        <svg width="22.39" xmlns="http://www.w3.org/2000/svg" height="13.704" viewBox="-4.343 4.343 22.39 13.704" fill="none">
                                <g data-testid="svg-g" style="fill:#000">
                                        <path
                                        d="M4.415 5.326c1.25-1.31 3.624-1.31 4.873 0l8.068 8.462c1.636 1.716.182 4.259-2.436 4.259H-1.216c-2.618 0-4.073-2.543-2.437-4.259l8.068-8.462Z"
                                        style="fill:#b2b2b2" class="fills" data-testid="svg-path" />
                                </g>
                        </svg>
                </button>`

        footer.appendChild(cardsContainer);

        return footer;
}


function createCards(pokemon) {
        const card = document.createElement('article');
        card.classList.add('pokeCard');
        card.id = 'cardPokemon';
        card.dataset.id = pokemon.id;

        card.innerHTML = /*html*/ `
        <span class="pokeCard__id">#${pokemon.id}</span>
        <figure class="pokeCard__img">
        <img src="${pokemon.image}"  alt="${pokemon.name}">
        </figure>
        `;




        card.addEventListener('click', () => {
                console.log(pokemon);
                localStorage.setItem('pokemon', JSON.stringify(pokemon));
        })
        return card
}



