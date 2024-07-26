import './home.scss';
import { createHeader } from '../../components/common/header/header';
import { createFooter } from '../../components/modals/pokeGalery/pokeGalery' ;

export function createHome() {
    const main = document.createElement('main');
    const header = createHeader();
    const footer = createFooter();

    main.innerHTML = /*html*/ `
    <h2>Aqui va el main</h2>
    `;


    document.body.prepend(header);
    document.body.appendChild(main);
    document.body.append(footer);
}