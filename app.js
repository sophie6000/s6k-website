const menu = document.querySelector('#mobile-menu');
const overlay = document.querySelector("#overlay");
const menuLinks = document.querySelector('.navbar__menu');

// Toggle menu functionality
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
