/*-----TOGGLING-NAVBAR-----*/
const burgerHome = document.getElementsByClassName("burger-item-home")[0];
const burgerAbout = document.getElementsByClassName("burger-item")[0];
const burgerProjects = document.getElementsByClassName("burger-item")[1];
const burgerContact = document.getElementsByClassName("burger-item")[2];

function toggleNavbar() {
    if (burgerHome.style.display != "block") {
    burgerHome.style.display = "block";
    burgerAbout.style.display = "block";
    burgerProjects.style.display = "block";
    burgerContact.style.display = "block";
    }
    else {
        burgerHome.style.display = "none";
        burgerAbout.style.display = "none";
        burgerProjects.style.display = "none";
        burgerContact.style.display = "none";
    }
}

window.onresize = closeBurgerItems;

function closeBurgerItems() {
    if(screen.width > 599)  {
        burgerHome.style.display = "none";
        burgerAbout.style.display = "none";
        burgerProjects.style.display = "none";
        burgerContact.style.display = "none";
    }
}
/*-----TOGGLING-NAVBAR-----*/
/*-----HOME-TYPING-ANIMATION-----*/
const texts = ["Junior Front End Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter  = currentText.slice(0, ++index);

    document.querySelector(".typing-animation").textContent = letter;

    if (letter.length === currentText.length) {
        count ++;
        index = 0;
    }

    setTimeout(type, 400)
})();
/*-----HOME-TYPING-ANIMATION-----*/