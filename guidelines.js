var gradientLine = document.querySelector(".gradient-bar");
var topButton = document.querySelector(".backtotop");



window.addEventListener('scroll', barScroll);

function barScroll() {
    if (window.pageYOffset > 20) { 
        gradientLine.style.height = "3px";
    } else {
                gradientLine.style.height = "10px";
    }
    
}

window.addEventListener('scroll', backTop);

function backTop() {
    if (window.pageYOffset > 4000) { 
        topButton.className = "poptop";
    } else {
        topButton.className = "wegpop";
    }
    
}


