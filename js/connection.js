const URL = 'https://pokeapi.co/api/v2/';
const Limint = 20;
const Offset = 0;

async function getAllPokemon() {
  const res = await fetch(`${URL}pokemon/?offset=${Offset}&limit=${Limint}`);
  if (!res.ok) return false;
  const allPokemon = await res.json();
  allPokemon.results.forEach((element) => {
    getPokemon(element.url).then((pokemon) => {
      console.log(pokemon);
    });
  });
}

async function getPokemon(url) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    if (!res.ok) return reject;
    const pokemonComplet = await res.json();
    let pokemon = {
      img: {
        Front: pokemonComplet.sprites.front_default,
        Back: pokemonComplet.sprites.back_default,
      },
      name: pokemonComplet.name,
      id: pokemonComplet.id,
      stats: pokemonComplet.stats,
      types: pokemonComplet.types,
    };
    return resolve(pokemon);
  });
}

export { getAllPokemon };

// Todo

/**
 * Todo
 *
 * sacar la informacion de la variable pokemon
 * Pasar la informacion a las funciones de Strcuture
 * la funcion Card es la ultima.
 *
 *
 */
