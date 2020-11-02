import { getAllPokemon, getPokemonType } from './connection.js';
import { getAllCard, resetCard } from './card.js';
import { peintType, peintCard } from './peint.js';
const TypeHtml = document.querySelector('#Type');
const limit = 20;
const Cards = peintCard(limit);

async function main() {
  await peintType();
  await getAllPokemon(limit)
    .then((pokemons) => {
      getAllCard(pokemons, Cards, false);
    })
    .catch((error) => {
      console.log(error);
    });
}

main();

TypeHtml.addEventListener('change', async () => {
  const selectedOption = TypeHtml.options[TypeHtml.selectedIndex];
  resetCard(Cards, limit);
  if (selectedOption.value === 'Todos') {
    await getAllPokemon(limit)
      .then((pokemons) => {
        getAllCard(pokemons, Cards, false);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }
  await getPokemonType(selectedOption.value, limit).then((pokemons) => {
    getAllCard(pokemons, Cards, true);
  });
});
