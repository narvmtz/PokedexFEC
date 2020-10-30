import { generateCard } from './card.js';
import { getTypes } from './connection.js';
const Pokedex = document.querySelector('#pokemon');
const TypeHtml = document.querySelector('#Type');

async function peintType() {
  const Types = await getTypes();
  Types.forEach((type) => {
    const optionHtml = document.createElement('option');
    optionHtml.setAttribute('value', type);
    optionHtml.innerHTML = type;
    TypeHtml.appendChild(optionHtml);
  });
}
function peintCard(limit) {
  const Cards = generateCard(limit);
  Cards.forEach((element) => {
    Pokedex.appendChild(element);
  });
  return Cards;
}

export { peintType, peintCard };
