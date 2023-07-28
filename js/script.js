// Nav


const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle() {
    nav.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", navToggle);

//hide the nav by clicking outsite of it
document.addEventListener("click", (event) => {
    const inClickInsideNav = nav.contains(event.target);
    const inClickInsideNavToggler = navToggler.contains(event.target);
    if (!(inClickInsideNav || inClickInsideNavToggler) && nav.classList.contains("active")) {
        navToggle();
    }
})

// // theme light dark

// function themeLightDark(){
//   const switcherBtn = document.querySelector(".js-switcher-btn");
//     const icon = document.querySelector(".fas");

//     function changeIcon() {
//         if (document.body.classList.contains("dark")) {
//             icon.classList.remove("fa-moon");
//             icon.classList.add("fa-sun");
//         }
//         else {
//             icon.classList.add("fa-moon");
//             icon.classList.remove("fa-sun");
//         }
//     }

//     changeIcon();

// }
// themeLightDark();


// theme light ko asa bhi likh skta h

const Switcher = document.querySelector(".js-switcher-btn");
   const Body = document.querySelector(".body");
//    const Fas = document.querySelector(".fas");

function switcherMode() {
    Body.classList.toggle("dark");
    
}

Switcher.addEventListener("click", switcherMode);



































