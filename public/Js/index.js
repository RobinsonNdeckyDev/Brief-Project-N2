// Navigation bouton hamburger

const menuHamburger = document.querySelector(".hamburger")
console.log(menuHamburger);

const navLinks = document.querySelector(".navigation");
console.log(navLinks)
 
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')

})