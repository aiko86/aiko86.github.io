var topLogo = document.querySelector(".header-logo");
var topHeader = document.querySelector(".top-header");
var navigation = document.querySelector(".navigation-item-font");
var hamburgerMenu = document.querySelector(".hamburger-nav");
var hamburgerMenuTrigger = document.querySelector(".nav-trigger");
var hamburgerMenuContainer = document.getElementById("hamburger-container");
var redBlob = document.querySelector(".red-blob");
var preSpeakerRow = document.querySelector(".pre-speakers-row");



//function for the sticky header

window.addEventListener('scroll', navScroll);

function navScroll() {
    if (window.pageYOffset > 50) { /* when we scroll down 50px, the logo will become blue*/
        topLogo.style.fill = "#0947FF";
        topHeader.style.background = "rgb(255,255,255,0.95)";
        topHeader.style.boxShadow = "1px 1px 20px rgba(68,68,78,0.2)";
        navigation.style.color = "#44444E";
        redBlob.style.top = "40%";


    } else {
        topLogo.style.fill = "#FFFFFF"; /* else, the logo will become white again */
        topHeader.style.background = "rgb(255,255,255,0)";
        topHeader.style.boxShadow = "1px 1px 20px rgba(68,68,78,0)";
        navigation.style.color = "#FFFFFF";
         redBlob.style.top = "15%";

    }
}

//function for the sticky header

hamburgerMenuContainer.addEventListener('click', toggleMenu);

function toggleMenu(){
  hamburgerMenuTrigger.classList.toggle('is-open');
  hamburgerMenu.classList.toggle('is-open');

}

//function for the red blob

window.addEventListener('scroll', blobMoves);

function blobMoves() {
    if (window.pageYOffset >= 500) { /* when we scroll down 10px, the bblob will move*/
        redBlob.style.top = "30%";

    } else {
         redBlob.style.top = "20%";

    }
}

// function for the video frame
var videoModal = document.querySelector(".video-modal");
var modalPlayButton = document.querySelector(".play-icon");
var closeVideoButton = document.querySelector(".close-video-button");

// Events
modalPlayButton.addEventListener('click', openModal);
closeVideoButton.addEventListener('click', closeModal);

// Open
function openModal() {
  videoModal.style.display = 'block';
}

// Close
function closeModal() {
  videoModal.style.display = 'none';
}

