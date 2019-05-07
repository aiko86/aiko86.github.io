var buttonHeader = document.querySelector(".header-small-blue-button");


//new function for the sticky header and its button

window.addEventListener('scroll', navScroll);

function navScroll() {
    if (window.pageYOffset > 50) { 
        buttonHeader.style.backgroundColor = "#0846FF";

    } else {
        buttonHeader.style.background = "rgba(255, 255, 255, 0.2)";

    }
}


