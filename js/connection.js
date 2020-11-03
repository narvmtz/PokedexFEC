const URL = 'https://pokeapi.co/api/v2/';
const Offset = 0;
let allPokemon = [];

async function getAllPokemon(Limint) {
  try {
    const res = await fetch(`${URL}pokemon/?offset=${Offset}&limit=${Limint}`);
    if (!res.ok) throw new Error('Error en la api');
    const resPokemon = await res.json();
    for (let index = 0; index < Limint; index++) {
      await getPokemon(resPokemon.results[index].url).then((pokemon) => {
        allPokemon.push(pokemon);
      });
    }
    return allPokemon;
  } catch (error) {
    console.error(error.message);
  }
}

async function getPokemon(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Pokemon no encontrado');
    const data = await res.json();
    const pokemon = {
      img: [data.sprites.front_default],
      id: data.id,
      name: data.name,
      stats: data.stats,
      types: data.types,
    };
    return pokemon;
  } catch (error) {
    console.error(error.message);
  }
}

export { getAllPokemon };
