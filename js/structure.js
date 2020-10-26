function getCard(stats, imgs, name, id, types) {
  let htmlType = `<div class="type">`;
  types.forEach((type) => {
    htmlType = +`<p class= ${type} >${type}</p>`;
  });
  const card = `
  <section class="card">
  <div class="Info">
    <img src=${imgs[0]} alt="front_default"
      class="sprite">
    <img src=${imgs[1]} alt="back_default"
      class="sprite">
    <p># <span class="number">${id}</span></p>
  </div>
  <h3>${name}</h3>
  ${htmlType}
  </div>
  <div class="stats">
    <span>
      <p><i class="fas fa-heart"></i> HP</p>
      <p>${stats.hp}</p>
    </span>
    <span>
      <p><i class="fas fa-fire"></i> Attack</p>
      <p>${stats.attack}</p>
    </span>
    <span>
      <p><i class="fas fa-shield-alt"></i> Defense</p>
      <p>${stats.defense}</p>
    </span>
    <span>
      <p><i class="fas fa-atom"></i> Special Attack</p>
      <p>${stats.special_attack}</p>
    </span>
    <span>
      <p><i class="fas fa-plus-square"></i>
        Special Defense</p>
      <p>${stats.special_defence}</p>
    </span>
    <span>
      <p><i class="fas fa-bolt"></i> Speed</p>
      <p>${stats.speed}</p>
    </span>
  </div>
</section>`;

  return card;
}

export { getCard };
