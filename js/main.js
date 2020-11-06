import {
  getAllPokemon,
  getPokemonType,
  getPokemon,
  getUrls,
} from './connection.js';
import { getAllCard, resetCard } from './card.js';
import {
  peintType,
  peintAllCard,
  namePokemon,
  peintCard,
  resetPokedex,
} from './peint.js';
const TypeHtml = document.querySelector('#Type');
const searchHtml = document.querySelector('#search');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const limit = 20;
const Cards = peintAllCard(limit);

async function main() {
  namePokemon();
  peintType();
  getAllPokemon(limit)
    .then((pokemons) => {
      getAllCard(pokemons, Cards, false);
    })
    .catch((error) => {
      console.log(error);
    });
}

main();

nextButton.addEventListener('click', () => {
  getAllPokemon(limit, 'next')
    .then((pokemons) => {
      getAllCard(pokemons, Cards, true);
      const url = getUrls();
      if (previousButton.disabled) previousButton.disabled = false;
      if (url[0] == null) nextButton.disabled = true;
    })
    .catch((error) => {
      console.log(error);
    });
});

previousButton.addEventListener('click', () => {
  getAllPokemon(limit, 'previous')
    .then((pokemons) => {
      getAllCard(pokemons, Cards, true);
      const url = getUrls();
      if (nextButton.disabled) nextButton.disabled = false;
      if (url[1] == null) previousButton.disabled = true;
    })
    .catch((error) => {
      console.log(error);
    });
});

TypeHtml.addEventListener('change', async () => {
  const selectedOption = TypeHtml.options[TypeHtml.selectedIndex];
  resetCard(Cards, limit);
  if (selectedOption.value === 'Todos') {
    getAllPokemon(limit)
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

searchHtml.addEventListener('change', () => {
  const selectedOption = searchHtml.value;
  if (!selectedOption) {
    resetPokedex();
    peintAllCard(limit);
    return;
  }
  getPokemon(selectedOption).then((e) => {
    if (!e) return;
    resetPokedex();
    peintCard(e);
  });
});
