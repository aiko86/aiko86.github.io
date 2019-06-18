var gradientLine = document.querySelector(".gradient-bar");

window.addEventListener('scroll', barScroll);

function barScroll() {
    if (window.pageYOffset > 20) { 
        gradientLine.style.height = "3px";
    } else {
                gradientLine.style.height = "10px";
    }
}


