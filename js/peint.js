import { generateCard } from './card.js';
import { getTypes, getNamePokemon } from './connection.js';
import { createCard } from './structure.js';
const Pokedex = document.querySelector('#pokemon');
const TypeHtml = document.querySelector('#Type');
const suggestionsHtml = document.querySelector('#suggestions');

function namePokemon() {
  getNamePokemon().then((pokemon) => {
    pokemon.forEach((e) => {
      const option = document.createElement('option');
      option.setAttribute('value', e.name);
      suggestionsHtml.appendChild(option);
    });
  });
}

async function peintType() {
  const Types = await getTypes();
  for (const key in Types) {
    if (Types.hasOwnProperty(key)) {
      const optionHtml = document.createElement('option');
      optionHtml.setAttribute('value', key);
      optionHtml.innerHTML = Types[key];
      TypeHtml.appendChild(optionHtml);
    }
  }
}

function peintAllCard(limit) {
  const Cards = generateCard(limit);
  Cards.forEach((element) => {
    Pokedex.appendChild(element);
  });
  return Cards;
}

function resetPokedex() {
  Pokedex.innerHTML = '';
}

function peintCard(pokemon) {
  const card = document.createElement('section');
  card.classList.add('hidden');
  Pokedex.appendChild(card);
  createCard(pokemon)
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

export { peintType, peintAllCard, namePokemon, peintCard, resetPokedex };