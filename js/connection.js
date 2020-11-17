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

function getUrls() {
  return [nextUrl, previousUrl];
}

async function getNamePokemon() {
  if (!!arrayPokemon) {
    return arrayPokemon;
  }
  try {
    const data = await peticionFetch(`${URL}pokemon/?&limit=-1`);
    const length = `${URL}pokemon/`.length;
    data.results.map((pokemon, i) => {
      const urlId = pokemon.url.slice(length, pokemon.url.length - 1);
      if (urlId == 10001) {
        arrayPokemon = data.results.slice(0, i);
      }
    });
    return arrayPokemon;
  } catch (error) {
    return console.log(error);
  }
}

async function getAllPokemon(Limit, peticion) {
  let url;
  switch (peticion) {
    case 'next':
      if (!!nextUrl) {
        url = nextUrl;
      }
      break;
    case 'previous':
      if (!!previousUrl) {
        url = previousUrl;
      }
      break;
    case 'limit':
      if (!!Limit) {
        url = `${URL}pokemon/?offset=${Offset}&limit=${Limit}`;
      }
      break;
    default:
      if (!!allPokemon) {
        return allPokemon;
      }
      url = `${URL}pokemon/?offset=${Offset}&limit=${Limit}`;
      break;
  }
  await pagingPokemon(url);
  return allPokemon;
}

async function pagingPokemon(url) {
  try {
    const resPokemon = await peticionFetch(url);
    previousUrl = resPokemon.previous;
    nextUrl = resPokemon.next;
    return promiseFetch(resPokemon.results).then((data) => {
      allPokemon = [];
      data.forEach((pokemon) => {
        allPokemon.push(estrcuturePokemon(pokemon));
      });
    });
  } catch (error) {
    console.error(error.message);
  }
}

async function getPokemon(pokemon) {
  try {
    if (!pokemon) {
      throw new Error('No se a pasado un pokemon');
    }
    const resPokemon = await peticionFetch(`${URL}pokemon/${pokemon}`);
    return estrcuturePokemon(resPokemon);
  } catch (error) {
    console.log(error);
  }
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
