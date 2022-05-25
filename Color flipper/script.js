const randomizeBtn = document.querySelector('.btn-randomize');
const background = document.querySelector('main');
const colorName = document.querySelector('.color-name');
const colors = ['red','green','black','lightgray','yellow','pink','#f5f5f5'];

const colorsLenght = colors.length;

randomizeBtn.addEventListener('click', ()=>{
    colorIndex = Math.floor(Math.random() * colorsLenght);
    background.style.background = colors[colorIndex]; 
    colorName.textContent = colors[colorIndex];
    colorName.style.color = colors[colorIndex];
});