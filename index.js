const navbar = document.getElementById("main-navbar");
const navbarHeight = navbar.offsetHeight;
console.log(`Navbar Height: ${navbarHeight}px`);
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.style.paddingTop = `${navbarHeight + 20}px`;
});

window.onload = function() {
  this.document.getElementById("contact-form").reset();
};