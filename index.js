const navbar = document.getElementById("main-navbar");
const navbarHeight = navbar.offsetHeight;
// console.log(`Navbar Height: ${navbarHeight}px`);
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.style.paddingTop = `${navbarHeight + 20}px`;
});

window.onload = function() {
  this.document.getElementById("contact-form").reset();
};

document.addEventListener('DOMContentLoaded', function(){

  document.addEventListener('click', function(event){
    // toggler button and menu
    const togglerButton = document.querySelector(".navbar-toggler");
    const collapsibleMenu = document.querySelector(".navbar-collapse");
    const isMenuClosed = togglerButton.classList.contains('collapsed');
    const trigger = event.target

    if (!isMenuClosed) {
      if ((!togglerButton.contains(trigger)) && (!collapsibleMenu.contains(trigger))) {
        togglerButton.classList.add("collapsed");
        collapsibleMenu.classList.remove("show");
        
      }
    }
  });
});