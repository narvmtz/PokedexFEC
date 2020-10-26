function Stats(stats) {
  return `
  <div class="stats">
    <span>
      <p><i class="fas fa-heart"></i> HP</p>
      <p>${stats[0]}</p>
    </span>
    <span>
      <p><i class="fas fa-fire"></i> Attack</p>
      <p>${stats[1]}</p>
    </span>
    <span>
      <p><i class="fas fa-shield-alt"></i> Defense</p>
      <p>${stats[2]}</p>
    </span>
    <span>
      <p><i class="fas fa-atom"></i> Special Attack</p>
      <p>${stats[3]}</p>
    </span>
    <span>
      <p><i class="fas fa-plus-square"></i>
        Special Defense</p>
      <p>${stats[4]}</p>
    </span>
    <span>
      <p><i class="fas fa-bolt"></i> Speed</p>
      <p>${stats[5]}</p>
    </span>
  </div>`;
}
function Card(params) {
  let card = '<section class="card">';
  params.forEach((param) => {
    card += param;
  });
  return (card += '</section>');
}

function Types(params) {
  let htmlType = `<div class="type"> `;
  params.forEach((type) => {
    htmlType += `<p class= ${type.type.name} >${type.type.name}</p>`;
  });
  return (htmlType += `</div>`);
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
export { Stats, Info, Card, Types };
