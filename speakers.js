var target = document.querySelector(".background-image");

target.addEventListener('mousemove', superPerspective);

function superPerspective(e) {
  
  const xPosition = e.pageX;//mouse position relative to the side edge of the doc window
  

    const yPosition = e.pageY;//mouse position relative to the top edge of the doc window
  
  const card = document.querySelector(".speaker-photo-container");
  
  const cardCoord = card.getBoundingClientRect();//this is the distance from the border of the card to the end and beginning of the screen, both x and y. cardCoord.left and .top that we see below are to identify in which axes.
  
  
 //with the nex constants, we are storing the x and y coordinates only
const cardX = cardCoord.left + (card.offsetWidth / 2);

 const cardY = cardCoord.top + (card.offsetHeight / 2);
  
const angleX = (cardY - yPosition) / 42;
  //the more down with go with the cursor, more the value of the angle X will be lower. Same below, but for vertical axes
  
 const angleY = (cardX - xPosition) / - 42;
  //this has to be minus in order to move on the opposite side
  
 //card.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";
  
  
  //we use csstext to add two or more style changes, in this case transform and box shadow
  card.style.cssText = "transform: rotateX(" + angleX + "deg) rotateY(" + angleY + "deg); box-shadow: " + (angleX/10 - angleY) + "px " + (angleX + 10) + "px 20px rgba(0,0,0, .10)"

}

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