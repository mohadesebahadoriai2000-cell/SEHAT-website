// =================================
// SEHAT Automation JavaScript
// =================================


// Elements

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelectorAll(".main-nav a");



// Close Menu Function

function closeMenu(){

    mainNav.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");

    menuIcon.classList.add("fa-bars");

}



// Toggle Menu

menuToggle.addEventListener("click", () => {


    mainNav.classList.toggle("active");


    if(mainNav.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

    }
    else{

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    }


});



// Close After Link Click

navLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

});



// Close Outside Click

document.addEventListener("click", (event)=>{


    if(
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
    ){

        closeMenu();

    }


});



// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll", ()=>{


    reveals.forEach(element=>{


        const elementTop =
        element.getBoundingClientRect().top;


        if(elementTop < window.innerHeight - 150){

            element.classList.add("active");

        }


    });


});