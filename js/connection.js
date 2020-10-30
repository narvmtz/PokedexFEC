const URL = 'https://pokeapi.co/api/v2/';
const Offset = 0;
let allPokemon = [];
let allTypes = [];

async function getAllPokemon(Limint) {
  try {
    const res = await fetch(`${URL}pokemon/?offset=${Offset}&limit=${Limint}`);
    if (!res.ok) throw new Error('Error en la api');
    const resPokemon = await res.json();
    for (let index = 0; index < Limint; index++) {
      await getPokemon(resPokemon.results[index].url).then((pokemon) => {
        allPokemon.push(pokemon);
      });
    }
    return allPokemon;
  } catch (error) {
    console.error(error.message);
  }
}

async function getPokemon(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Pokemon no encontrado');
    const data = await res.json();
    const pokemon = {
      img: [data.sprites.front_default, data.sprites.back_default],
      id: data.id,
      name: data.name,
      stats: data.stats,
      types: data.types,
    };
    return pokemon;
  } catch (error) {
    console.error(error.message);
  }
}

async function getType(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Tipo no encontrado');
    const data = await res.json();
    for (let index = 0; index < data.names.length; index++) {
      const name = data.names[index].language.name;
      if (name === 'es') {
        return data.names[index].name;
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function getTypes() {
  try {
    const res = await fetch(`${URL}type`);
    if (!res.ok) throw new Error('Error en la api');
    const data = await res.json();
    for (let index = 0; index < data.results.length; index++) {
      await getType(data.results[index].url).then((type) => {
        if (type != undefined) {
          allTypes.push(type);
        }
      });
    }
    return allTypes;
  } catch (error) {
    console.error(error.message);
  }
}

export { getAllPokemon, getTypes };
