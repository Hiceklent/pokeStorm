import "./header.scss";

export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("global-header");
  header.innerHTML = /*html*/ ` 
    <figure class="header__icon">
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="27 27 46 46">
    <path class="svg-path"
        d="M50 40.48a9.54 9.54 0 0 1 9.27 7.37h13.12a22.49 22.49 0 0 0-44.78 0h13.12A9.54 9.54 0 0 1 50 40.48" />
    <path class="svg-path" d="M44.78 50A5.22 5.22 0 1 0 50 44.78 5.22 5.22 0 0 0 44.78 50" />
    <path class="svg-path"
        d="M50 59.52a9.54 9.54 0 0 1-9.27-7.37H27.61a22.49 22.49 0 0 0 44.78 0H59.27A9.54 9.54 0 0 1 50 59.52" />
    </svg>
  
    </figure>
    <h1 class="header__title">PokeStorm</h1>
    `;
  return header;
}