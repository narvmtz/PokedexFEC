import { createCard } from './structure.js';

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
  await createCard(pokemon)
    .then((components) => {
      components.forEach((componet) => {
        card.appendChild(componet);
        card.classList.remove('hidden');
        card.classList.add('card');
      });
      return card;
    })
    .catch((error) => {
      return error;
    });
}

async function getAllCard(allPokemon, cards) {
  for (let index = 0; index < allPokemon.length; index++) {
    await getCard(allPokemon[index], cards[index]);
  }
}

export { getAllCard, generateCard };
