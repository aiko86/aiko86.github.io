
 /*
var easterEggBanner = document.querySelector(".easter-egg-banner");
var easterEggClose = document.querySelector(".easter-egg-close");


//function to close the easter egg fixed banner

window.addEventListener("load", start);

function start(){
    easterEggClose.addEventListener('click', toggleBanner);

}

function toggleBanner(){
easterEggBanner.style.display = "none";

}

*/

jQuery(document).ready(function( $ ) {

	$('.easter-egg-close').click( function(){
		$('.easter-egg-banner').fadeOut(300);
		sessionStorage.setItem('closedOnce', '1');
	});
	
	if (sessionStorage.getItem('closedOnce') === "1")  {
       $('.easter-egg-banner').hide(); 
    }
 
});
