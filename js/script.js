
// =================================
// SEHAT Automation JavaScript
// =================================


// Elements

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelectorAll(".main-nav a");



// Open / Close Menu

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");


    if(mainNav.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});



// Close Menu After Clicking Link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});



// Close Menu When Clicking Outside

document.addEventListener("click", (event) => {


    const clickedOutside = 
    !mainNav.contains(event.target) &&
    !menuToggle.contains(event.target);



    if(clickedOutside){

        mainNav.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});


// Scroll Reveal


const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll", () => {


    reveals.forEach(element => {


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }


    });


});
// Variables




// Scroll Effects


// Future Functions
