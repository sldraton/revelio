// Setting job title height to be same as image
const authorName = document.querySelector(".landing-name");
const nameHeight = authorName.offsetHeight;
const mediaQueryLaptop = "(min-width: 1024px)";

function applyStyleForLaptop() {
  const currentWidth = window.innerWidth;
  const landingDesc = document.querySelector(".landing-desc");
  // console.log(`Current Width: ${currentWidth}`)
  if (currentWidth >= 1023) {
    landingDesc.style.paddingTop = `${nameHeight -10}px`;
  }
  else {
    landingDesc.style.paddingTop = "1vw";
  }
}

applyStyleForLaptop();
window.addEventListener("resize", applyStyleForLaptop);