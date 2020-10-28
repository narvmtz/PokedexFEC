import { getAllPokemon } from './connection.js';
import { getAllCard } from './card.js';
const Pokedex = document.querySelector('#pokemon');

async function main() {
  await getAllPokemon()
    .then((pokemons) => getAllCard(pokemons))
    .catch(console.warn());
}

main();

// TODO
// agregar 00
// ver todos los pokemon
// Modularizar
// tipos
