function showStats(card) {
  if(window.innerWidth >= 768) return;
  const infoStyle = card.childNodes[0].style;
  const nameStyle = card.childNodes[1].style;
  const typeStyle = card.childNodes[2].style;
  const statStyle = card.childNodes[3].style;
  if(card.style.cssText == "transform: rotateY(180deg);"){
    card.style.cssText = ""
    statStyle.cssText = ""
    nameStyle.cssText = ""
    infoStyle.cssText = ""
    typeStyle.cssText = ""
  }
  else {
    card.style.cssText = "transform: rotateY(180deg);"
    statStyle.cssText = "display: block;"
    infoStyle.cssText = "display: none;"
    typeStyle.cssText = "display: none;"
    nameStyle.cssText = "transform: rotateY(180deg);"
  }
};

export { showStats };
