import './home.scss';
import { createHeader } from '../../components/common/header/header';

export function createHome() {
    const main = document.createElement('main');

    const header = createHeader();

    main.innerHTML = /*html*/ `
    <h2>Aqui va el main</h2>
    `;

    document.body.prepend(header);
    document.body.appendChild(main);
}