import axios from "axios";
export const pokeTypesColors = (type) =>{
    if (type === 'bug') {  return '#A8A878'; }
    else if (type === 'dark') { return '#C03028'; }
    else if (type === 'dragon') { return '#7038F8'; }
    else if (type === 'electric') { return '#F8D030'; }
    else if (type === 'fairy') { return '#EE99AC'; }
    else if (type === 'fighting') { return '#C03028'; }
    else if (type === 'fire') { return '#F08030'; }
    else if (type === 'flying') { return '#A890F0'; }
    else if (type === 'ghost') { return '#705898'; }
    else if (type === 'grass') { return '#78C850'; }
    else if (type === 'ground') { return '#E0C068'; }
    else if (type === 'ice') { return '#98D8D8'; }
    else if (type === 'normal') { return '#A8A878'; }
    else if (type === 'poison') { return '#A040A0'; }
    else if (type === 'psychic') { return '#F85888'; }
    else if (type === 'rock') { return '#B8A038'; }
    else if (type === 'steel') { return '#B8B8D0'; }
    else if (type === 'water') { return '#6890F0'; }
    else { return '#000000'; }
}

export const addTypeIcon = async (type) =>{ 
    const svgPokeTypeContainer =  document.getElementById('pokemon-type-icon-container');
    const TypeColor = pokeTypesColors(type);

    try {
        const response = await axios.get(`../../../assets/images/types/${type}.svg`);
        const svgIcon = await response.data;
        
        svgPokeTypeContainer.innerHTML = svgIcon;
        const svgIconStyled = svgPokeTypeContainer.querySelector('path');

        if (svgIconStyled) {
            svgIconStyled.style.fill = TypeColor

        }
        
        return 
    } catch (error) {
        console.error(`No se pudo cargar el ícono para el tipo: ${type}`, error); 
    }
}
