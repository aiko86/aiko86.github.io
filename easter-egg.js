var easterEggBanner = document.querySelector(".easter-egg-banner");
var easterEggClose = document.querySelector(".easter-egg-close");


//function to close the easter egg fixed banner

easterEggClose.addEventListener('click', toggleBanner);

function toggleBanner(){
easterEggBanner.style.display = "none";

}

// function for the easter egg popup
var bynderLogo = document.querySelector(".homepage-bynder-logo");
var closeEasterEggButton = document.querySelector(".close-video-button");

// Events
bynderLogo.addEventListener('click', openModal);
closeVideoButton.addEventListener('click', closeModal);

// Open
function openModal() {
  videoModal.style.display = 'block';
}

// Close
function closeModal() {
  videoModal.style.display = 'none';
}
