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
                <button class="pokeGalery__boton"  id="open-modal">up</button>`

        footer.appendChild(cardsContainer);

        return footer;
}


function createCards(pokemon) {
        const card = document.createElement('article');
        card.classList.add('pokeCard');
        card.id = 'cardPokemon';
        card.dataset.id = pokemon.id;
        const imageIcon = null

        if(pokemon.type == 'fire') {
                imageIcon = fire
        }

        card.innerHTML = /*html*/ `
        <span class="pokeCard__id">#${pokemon.id}</span>
        <figure class="pokeCard__img">
        <img src="${pokemon.image}"  alt="${pokemon.name}">
        </figure>
        <img id="type" src="${imageIcon}"  alt="${pokemon.name}">
        `;




        card.addEventListener('click', () => {
                console.log(pokemon);
                localStorage.setItem('pokemon', JSON.stringify(pokemon));
        })
        return card
}



