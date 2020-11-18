import { getTypes, getStats } from './connection.js';

const icons = [
  'fa-heart',
  'fa-fire',
  'fa-shield-alt',
  'fa-atom',
  'fa-plus-square',
  'fa-bolt',
];


const alt = [' - img front', ' - img back'];

async function Stats(params) {
  const allStat = await getStats();
  const htmStats = document.createElement('div');
  htmStats.classList.add('stats');
  icons.forEach((icon, i) => {
    const htmlStat = document.createElement('span');
    htmlStat.innerHTML += `<p><i class="fas ${icon}"></i> ${allStat[params[i].stat.name]}</p>`;
    htmlStat.innerHTML += `<p class="number">${params[i].base_stat}</p>`;
    htmStats.appendChild(htmlStat);
  });
  return htmStats;
}

async function Types(params) {
  const Types = await getTypes();
  const htmlType = document.createElement('div');
  htmlType.classList.add('type');
  params.forEach((type) => {
    htmlType.innerHTML += `<p class= ${type.type.name} >${
      Types[type.type.name]
    }</p>`;
  });
  return htmlType;
}

async function Info(imgs, id, name) {
  const htmlInfo = document.createElement('div');
  htmlInfo.classList.add('Info');
  imgs.forEach((img, i) => {
    const htmlImg = document.createElement('img');
    htmlImg.setAttribute('src', img);
    htmlImg.setAttribute('alt', name + alt[i]);
    htmlImg.classList.add('sprite');
    htmlInfo.appendChild(htmlImg);
  });
  htmlInfo.innerHTML += `<p># <span class="number">${id
    .toString()
    .padStart(3, 0)}</span></p>`;
  return htmlInfo;
}

async function insertName(name) {
  const htmlName = document.createElement('h3');
  htmlName.classList.add('name');
  htmlName.innerHTML = name;
  return htmlName;
}

async function createCard(pokemon) {
  return await Promise.all([
    Info(pokemon.img, pokemon.id, pokemon.name),
    insertName(pokemon.name),
    Types(pokemon.types),
    Stats(pokemon.stats),
  ])
    .then((element) => {
      return element;
    })
    .catch((error) => {
      return error;
    });
}

export { createCard };
