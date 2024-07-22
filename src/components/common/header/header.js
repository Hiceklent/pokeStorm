import './header.scss';

export function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = /*html*/ ` 
    <h1>Mi Sitio Web</h1>
    `;
    return header;
  }