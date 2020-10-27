const icons = [
  'fa-heart',
  'fa-fire',
  'fa-shield-alt',
  'fa-atom',
  'fa-plus-square',
  'fa-bolt',
];

function Stats(stats) {
  const htmStats = document.createElement('div');
  htmStats.classList.add('stats');
  icons.forEach((icon, i) => {
    const htmlStat = document.createElement('span');
    console.log();
    htmlStat.innerHTML += `<p><i class="fas ${icon}"></i> ${stats[i].stat.name}</p>`;
    htmlStat.innerHTML += `<p>${stats[i].base_stat}</p>`;
    htmStats.appendChild(htmlStat);
  });
  return htmStats;
}

function Types(params) {
  const htmlType = document.createElement('div');
  htmlType.classList.add('type');
  params.forEach((type) => {
    htmlType.innerHTML += `<p class= ${type.type.name} >${type.type.name}</p>`;
  });
  return htmlType;
}

function Info(params) {
  return `
  <div class="Info">
  <img src=${params[0]} alt="front_default"
    class="sprite">
  <img src=${params[1]} alt="back_default"
    class="sprite">
  <p># <span class="number">${params[2]}</span></p>
</div>
<h3>${params[3]}</h3>
`;
}
export { Stats, Info, Types };
