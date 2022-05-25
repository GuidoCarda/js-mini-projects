const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('operator');
const equalButton = document.querySelector('.equal');
const calculatorDisplay = document.querySelector('.calculator__display')
let previousValue = 0;
let currentValue = 0;
let operator;

// Concatenar los numeros que voy tocando antes de seleccionar un operador
// Event listener del equal para hacer el calculo


// Funcion para actualizar el display
// Funcion que realiza las operaciones
// Funcion para borrar

numberButtons.forEach( button => button.addEventListener('click', ()=> {  
  currentValue = currentValue + button.textContent

  console.log(currentValue)
  calculatorDisplay.innerHTML = currentValue

}))

equalButton.addEventListener('click', ()=> compute( currentValue, previousValue, operator))


function compute ( val1, val2, operator) {

}

function clear () {

}