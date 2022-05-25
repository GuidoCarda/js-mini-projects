/*

Key concepts covered:

document.querySelectorAll()
forEach()
addEventListener()
currentTarget property
classList
textContent*/ 

//Select all buttons
// and the counter span element

//Add an eventListener for when we click a button

//Depending on the button that we clicked, a function will be called

//On each function we would need to mutate the counter value
//Also we will need to manipulate the dom to show the updated value


const buttons = document.querySelectorAll('button');
const counterEl = document.querySelector('.counter');

let counter = 0;

//Solucion 2 (La hice despues de hacer la solucion 1 y ver el video)
buttons.forEach( button => button.addEventListener('click', (e)=>{
    let styles = e.currentTarget.classList;

    if(styles.contains('decrease')){ counter-- };
    if(styles.contains('reset')){ counter = 0 };
    if(styles.contains('increase')){ counter++ };

    counterEl.textContent = counter;

    setColor();
}));


function setColor(){
    if(counter>0){
        counterEl.style.color = 'green';
    }
    if(counter<0){
        counterEl.style.color = 'red';
    }
    if(counter===0){
        counterEl.style.color = 'black';
    }
}

/* Solucion 1 (La que se me occurio a mi)
buttons.forEach( button => button.addEventListener('click', (e)=>{
    let targetedBtn = e.currentTarget.textContent; 

    if (targetedBtn === 'decrease') {decreaseCounter()};
    if (targetedBtn === 'increase') {increaseCounter()};
    if (targetedBtn === 'reset')    {resetCounter()};

    counterEl.textContent = counter;

    setColor();
}));

function setColor(){
    if(counter > 0){
        counterEl.style.color= 'green';
    }
    if(counter < 0){
        counterEl.style.color= 'red';
    }
    if(counter === 0){
        counterEl.style.color= 'black';
    }
}

function decreaseCounter(){
    return counter--;
};

function increaseCounter(){
    return counter++; 
};

function resetCounter(){
    return counter=0;
};
*/



