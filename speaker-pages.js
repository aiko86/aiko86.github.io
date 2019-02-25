

//function for the hamburger menu

var hamburgerMenu = document.querySelector(".hamburger-nav");
var hamburgerMenuTrigger = document.querySelector(".nav-trigger");
var hamburgerMenuContainer = document.getElementById("hamburger-container");

hamburgerMenuContainer.addEventListener('click', toggleMenu);

function toggleMenu(){
  hamburgerMenuTrigger.classList.toggle('is-open');
  hamburgerMenu.classList.toggle('is-open');
buttonHeader.classList.toggle('button-white-border');

}