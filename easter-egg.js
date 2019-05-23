
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

  /* Close Popup and set session variable */
	$('.easter-egg-close').click( function(){
		$('.easter-egg-banner').fadeOut(300);
		sessionStorage.setItem('closedOnce', '1');
	});
	
  /* Hide Popup if They've already closed it once */
	if (sessionStorage.getItem('closedOnce') === "1")  {
       $('.easter-egg-banner').hide(); 
    }
 
});
