import { Stats, Info, Card, Types } from './structure.js';
import { getAllPokemon } from './connection.js';
const Pokedex = document.querySelector('#pokemon');

async function main() {
  // console.log(PokemonTest);
  // info[0] = PokemonTest.sprites.front_default;
  // info[1] = PokemonTest.sprites.back_default;
  // info[2] = PokemonTest.id;
  // info[3] = PokemonTest.name;
  // PokemonTest.stats.forEach((status, i) => {
  //   stats[i] = status.base_stat;
  // });
  // let Pokemon = [];
  // Pokemon[0] = Info(info);
  // Pokemon[1] = Types(PokemonTest.types);
  // Pokemon[2] = Stats(stats);
  // const card = Card(Pokemon);
  // Pokedex.innerHTML += card;
}

main();
getAllPokemon();

// TODO
// agregar 00
// ver todos los pokemon
// Modularizar
// tipos
