export const updateDetailsContent = (pokemon)  => {
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonImage = document.getElementById('pokemon-image');
    const pokemonStats = document.getElementById('pokemon-stats');

    pokemonName.textContent = pokemon.name;
    pokemonImage.src = pokemon.image;
    pokemonImage.alt = pokemon.name;
    pokemonStats.innerHTML = pokemon.stats.map(stat => `<li>${stat.name}: ${stat.baseStats}</li>`).join('');
}