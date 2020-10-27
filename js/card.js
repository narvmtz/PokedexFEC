import { Stats, Info, Types } from './structure.js';
const Pokedex = document.querySelector('#pokemon');

async function getCard(pokemon) {
  return new Promise(async (resolve, reject) => {
    const card = document.createElement('section');
    card.classList.add('card');
    card.appendChild(Types(pokemon.types));
    Pokedex.appendChild(card);
    return resolve(card);
  });
}

async function getAllCard(allPokemon) {
  return new Promise(async (resolve, reject) => {
    const resAllPokemon = [];
    allPokemon.forEach(async (element) => {
      resAllPokemon.push(await getCard(element));
      return resolve(resAllPokemon);
    });
  });
}

export { getAllCard };

// Array de allpokemon da 1 solo valor
// No muestras las tarjetas por no ser nodo
// Cambiar todo el archivo structure
//

// let pokemon = {
//   img: {
//     Front: pokemonComplet.sprites.front_default,
//     Back: pokemonComplet.sprites.back_default,
//   },
//   name: pokemonComplet.name,
//   id: pokemonComplet.id,
//   stats: pokemonComplet.stats,
//   types: pokemonComplet.types,
// };
