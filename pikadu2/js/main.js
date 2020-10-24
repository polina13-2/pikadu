let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.side-bar');

menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('visible');
})