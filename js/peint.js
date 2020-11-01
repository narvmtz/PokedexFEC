import { generateCard } from './card.js';
const Pokedex = document.querySelector('#pokemon');
const TypeHtml = document.querySelector('#Type');

const Types = [
  'Normal',
  'Luchador',
  'Volador',
  'Veneno',
  'Tierra',
  'Roca',
  'Bicho',
  'Fantasma',
  'Fuego',
  'Agua',
  'Hierba',
  'Eléctrico',
  'Psíquico',
  'Hielo',
  'Dragon',
  'Siniestro',
  'Hada',
  'Desconocido',
  'Oscuro',
];

function peintType() {
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
