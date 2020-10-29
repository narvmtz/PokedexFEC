import { getAllPokemon } from './connection.js';
import { getAllCard } from './card.js';
import { peintType, peintCard } from './peint.js';
const limit = 20;

async function main() {
  peintType();
  const Cards = peintCard(limit);
  await getAllPokemon(limit)
    .then((pokemons) => {
      getAllCard(pokemons, Cards);
    })
    .catch((error) => {
      console.log(error);
    });
}

main();
