import './pokeGalery.scss';

export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>&copy; 2024 Mi Sitio Web</p>`;
    return footer;
  }