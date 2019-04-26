var easterEggBanner = document.querySelector(".easter-egg-banner");
var easterEggClose = document.querySelector(".easter-egg-close");


//function to close the easter egg fixed banner

easterEggClose.addEventListener('click', toggleBanner);

function toggleBanner(){
easterEggBanner.style.display = "none";

}

