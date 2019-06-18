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
    if (window.pageYOffset > 3000) {
        topButton.className = "poptop";
    } else if (window.pageYOffset < 3000 && topButton.className === "poptop") {
            topButton.classList.add("wegpop");
    } else {
        topButton.classList.remove("poptop");
    }
}

topButton.addEventListener('click', clickToTop);


function clickToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}