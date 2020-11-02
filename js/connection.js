const URL = 'https://pokeapi.co/api/v2/';
const Offset = 0;
let allTypes;

async function getAllPokemon(Limint) {
  try {
    const res = await fetch(`${URL}pokemon/?offset=${Offset}&limit=${Limint}`);
    if (!res.ok) throw new Error('Error en la api');
    const resPokemon = await res.json();
    return promiseFetch(resPokemon.results).then((data) => {
      const allPokemon = [];
      data.forEach((pokemon) => {
        allPokemon.push(estrcuturePokemon(pokemon));
      });
      return allPokemon;
    });
  } catch (error) {
    console.error(error.message);
  }
}

async function promiseFetch(results, type) {
  if (type) {
    return Promise.all(results.map((data) => fetch(data.pokemon.url))).then(
      (data) => {
        return Promise.all(data.map((r) => r.json()));
      }
    );
  }
  return Promise.all(results.map((data) => fetch(data.url))).then((data) => {
    return Promise.all(data.map((r) => r.json()));
  });
}

function estrcuturePokemon(pokemon) {
  return {
    img: [pokemon.sprites.front_default],
    id: pokemon.id,
    name: pokemon.name,
    stats: pokemon.stats,
    types: pokemon.types,
  };
}

async function getTypes() {
  if (!!allTypes) {
    return allTypes;
  }
  allTypes = new Object();
  allTypes['Todos'] = 'Todos';
  try {
    const res = await fetch(`${URL}type/`);
    const length = `${URL}type/`.length;
    if (!res.ok) throw new Error('Error en la api');
    const data = await res.json();
    let results = [];
    data.results.map((data) => {
      if (data.url.slice(length, data.url.length - 1) <= 1000) {
        results.push(data);
      }
    });
    return promiseFetch(results).then((e) => {
      e.forEach((type) => {
        type.names.map((e) => {
          if (e.language.name == 'es') {
            allTypes[type.name] = e.name;
          }
        });
      });
      return allTypes;
    });
  } catch (error) {
    console.error(error.message);
  }
}

async function getPokemonType(type, limit) {
  try {
    const res = await fetch(`${URL}type/${type}`);
    if (!res.ok) throw new Error('Error en la api');
    const data = await res.json();
    const pokemons = data.pokemon.slice(0, limit);
    return promiseFetch(pokemons, true).then((data) => {
      const allPokemon = [];
      data.forEach((pokemon) => {
        allPokemon.push(estrcuturePokemon(pokemon));
      });
      return allPokemon;
    });
  } catch (error) {
    console.error(error.message);
  }
}

export { getAllPokemon, getTypes, getPokemonType };
