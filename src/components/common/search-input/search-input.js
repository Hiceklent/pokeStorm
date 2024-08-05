import './search-input.scss'

export const searchInput = () => {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('search-input-container');

    const input = document.createElement('input');
    input.classList.add('search-input');
    input.id = 'search-input';
    input.type = 'text';
    input.placeholder = 'Search Pokemon';

    
    // input.addEventListener('input', (e) => {
    //     const value = e.target.value.trim().toLowerCase();
    // })
    
    inputContainer.appendChild(input);

    return inputContainer
}