import { createCard } from './structure.js';
const Pokedex = document.querySelector('#pokemon');

function generateCard(amount) {
  const Cards = [];
  for (let index = 0; index < amount; index++) {
    const card = document.createElement('section');
    card.classList.add('hidden');
    Cards.push(card);
  }
  return Cards;
}

async function getCard(pokemon, card) {
  return new Promise(async (resolve, reject) => {
    const components = await createCard(pokemon);
    components.forEach((componet) => {
      card.appendChild(componet);
      card.classList.remove('hidden');
      card.classList.add('card');
    });
    Pokedex.appendChild(card);
    return resolve(card);
  });
}

async function getAllCard(allPokemon, cards) {
  return new Promise(async (resolve, reject) => {
    allPokemon.forEach(async (element, i) => {
      await getCard(element, cards[i]);
      return resolve;
    });
  });
}

export { getAllCard, generateCard };
