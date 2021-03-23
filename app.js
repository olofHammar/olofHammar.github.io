const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const chefNotesMenu = document.querySelector('#chefnotes-page')
    const ticTacToeMenu = document.querySelector('#tictactoe-page')
    const neighboursMenu = document.querySelector('#neighbour-page')
    const falgQuizMenu = document.querySelector('#flagquiz-page')

    let scrollPos = window.scrollY

    //adds the highllight class to the menu items
    if(window.innerWidth > 940 && scrollPos < 472) {
        console.log(window.scrollY);
        chefNotesMenu.classList.add('highlight');
        ticTacToeMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 940 && scrollPos < 992) {
        console.log(window.scrollY);
        ticTacToeMenu.classList.add('highlight');
        chefNotesMenu.classList.remove('highlight');
        neighboursMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 940 && scrollPos < 1552) {
        console.log(window.scrollY);
        neighboursMenu.classList.add('highlight');
        ticTacToeMenu.classList.remove('highlight');
        falgQuizMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 940 && scrollPos >= 1552) {
        console.log(window.scrollY);
        falgQuizMenu.classList.add('highlight');
        neighboursMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


var slide_index = 1;  
var tic_slide_index = 1;

displaySlides(slide_index);  
displayTicSlide(tic_slide_index);

function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  

    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block"; 
} 

function nextSlideTic(n) {
    displayTicSlide(tic_slide_index += n);
}

function currentSlide(n) {
    displayTicSlide(tic_slide_index = n);
}

function displayTicSlide(n) {
    var i; 
    var slides = document.getElementsByClassName("showSlide-two");

    if (n > slides.length) { tic_slide_index = 1}
    if (n < 1) { tic_slide_index = slides.length }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[tic_slide_index -1].style.display = "block";
}