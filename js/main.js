import { Stats, Info, Card, Types } from './structure.js';
const URL = 'https://pokeapi.co/api/v2/';
const Pokedex = document.querySelector('#pokemon');
const Limint = 20;
const Offset = 0;
let info = [];
let stats = [];
async function getPokemon() {
  let pokemon = await fetch(`${URL}pokemon/1`);
  return pokemon.json();
}
async function main() {
  const PokemonTest = await getPokemon();
  info[0] = PokemonTest.sprites.front_default;
  info[1] = PokemonTest.sprites.back_default;
  info[2] = PokemonTest.id;
  info[3] = PokemonTest.name;
  PokemonTest.stats.forEach((status, i) => {
    stats[i] = status.base_stat;
  });
  let Pokemon = [];
  Pokemon[0] = Info(info);
  Pokemon[1] = Types(PokemonTest.types);
  Pokemon[2] = Stats(stats);
  const card = Card(Pokemon);
  Pokedex.innerHTML += card;
}

main();
