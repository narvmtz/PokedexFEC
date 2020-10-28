import { getAllPokemon } from './connection.js';
import { getAllCard, generateCard } from './card.js';
const Pokedex = document.querySelector('#pokemon');
const limit = 20;

async function main() {
  const Cards = generateCard(limit);
  Cards.forEach((element) => {
    Pokedex.appendChild(element);
  });
  await getAllPokemon(limit)
    .then((pokemons) => getAllCard(pokemons, Cards))
    .catch(console.warn());
}

main();

// TODO
// agregar 00
// ver todos los pokemon
// Modularizar
// tipos
