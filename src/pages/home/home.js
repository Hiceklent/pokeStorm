import './home.scss';
import { createHeader } from '../../components/common/header/header';
import { createFooter } from '../../components/modals/pokeGalery/pokeGalery' ;

export function createHome(listaPokemons,pokeInStorage) {
    const main = document.createElement('main');
    const header = createHeader();
    const footer = createFooter(listaPokemons);

    main.innerHTML = /*html*/ `
    
    <h2>nombre del pokemon</h2>
    <figure>
    <img src="" alt="">
    </figure>
    <section>
        <div>
            <h3>stats</h3>
            <ul>
                <li>Atack</li>
                <li>Defense</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </section>
    `;


    document.body.prepend(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}