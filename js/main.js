import { getCard } from './structure.js';
const URL = 'https://pokeapi.co/api/v2/';

const Limint = 20;
const Offset = 0;

async function getPokemon() {
  let pokemon = await fetch(`${URL}pokemon/1`);
  return pokemon.json();
}
async function main() {
  const pokemon = await getPokemon();
  console.log(pokemon);
  console.log(pokemon.name);
  console.log(pokemon.id);
  console.log(pokemon.sprites.front_default);
  console.log(pokemon.sprites.back_default);
  pokemon.stats.forEach((status) => {
    console.log(status.base_stat);
  });
  pokemon.types.forEach((type) => {
    console.log(type.type.name);
  });
}

main();
