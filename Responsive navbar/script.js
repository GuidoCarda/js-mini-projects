const navToggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

navToggleBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('show-links');
});