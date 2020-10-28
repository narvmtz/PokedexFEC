const icons = [
  'fa-heart',
  'fa-fire',
  'fa-shield-alt',
  'fa-atom',
  'fa-plus-square',
  'fa-bolt',
];

const alt = [' - img front', ' - img back'];

function Stats(params) {
  return new Promise((resolve, reject) => {
    const htmStats = document.createElement('div');
    htmStats.classList.add('stats');
    icons.forEach((icon, i) => {
      const htmlStat = document.createElement('span');
      console.log();
      htmlStat.innerHTML += `<p><i class="fas ${icon}"></i> ${params[i].stat.name}</p>`;
      htmlStat.innerHTML += `<p>${params[i].base_stat}</p>`;
      htmStats.appendChild(htmlStat);
    });
    return resolve(htmStats);
  });
}

function Types(params) {
  return new Promise((resolve, reject) => {
    const htmlType = document.createElement('div');
    htmlType.classList.add('type');
    params.forEach((type) => {
      htmlType.innerHTML += `<p class= ${type.type.name} >${type.type.name}</p>`;
    });
    return resolve(htmlType);
  });
}

function Info(imgs, id) {
  return new Promise((resolve, reject) => {
    const htmlInfo = document.createElement('div');
    htmlInfo.classList.add('Info');
    imgs.forEach((img, i) => {
      const htmlImg = document.createElement('img');
      htmlImg.setAttribute('src', img);
      htmlImg.setAttribute('alt', name + alt[i]);
      htmlImg.classList.add('sprite');
      htmlInfo.appendChild(htmlImg);
    });
    htmlInfo.innerHTML += `<p># <span class="number">${id}</span></p>`;
    return resolve(htmlInfo);
  });
}

function insertName(name) {
  return new Promise((resolve, reject) => {
    const htmlName = document.createElement('h3');
    htmlName.innerHTML = name;
    return resolve(htmlName);
  });
}

function createCard(pokemon) {
  const ArrayComponent = [];
  return new Promise(async (resolve, reject) => {
    ArrayComponent.push(await Info(pokemon.img, pokemon.id));
    ArrayComponent.push(await insertName(pokemon.name));
    ArrayComponent.push(await Types(pokemon.types));
    ArrayComponent.push(await Stats(pokemon.stats));
    return resolve(ArrayComponent);
  });
}
export { createCard };
