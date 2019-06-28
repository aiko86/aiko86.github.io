var discountBanner = document.querySelector(".discount");
var discountClose = document.querySelector(".discount-close");



window.addEventListener('scroll', triggerBanner);

function triggerBanner() {
    if (window.pageYOffset > 75) {
        discountBanner.className = "discount-appear";
    } else {
        discountBanner.className = "discount-disappear";
    }
}

jQuery(document).ready(function( $ ) {

	$('.discount-button, .discount-close').click( function(){
		$('.discount-appear').fadeOut(100);
		sessionStorage.setItem('closedOnce', '1');
	});
	
	if (sessionStorage.getItem('closedOnce') === "1")  {
       $('.discount-appear').hide(); 
    }
 
});