
/*
* Solucion 1. Usando selectores dentro del elemento

//Seleciono todas las preguntas

const questions = document.querySelectorAll('.question');

//Por cada pregunta selecciono el boton para toglear el texto oculto
questions.forEach( question =>{
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener('click', ()=>{
      
        //recorro las preguntas
        //Si el elemento es distinto a la pregunta en la que clickee se oculta el texto
        //Esto es para que solo pueda mostrarse 1 sola pregunta y que las demas se mantengan ocultas
        questions.forEach( item => {
            if(item!==question){
                item.classList.remove('show-text');
            }
 
        })

        //Muestro el texto en la pregunta que clickee
        question.classList.toggle('show-text');
    });
    
});
*/ 


/*
* Solucion 2 atravezando el DOM 
*/

const btns = document.querySelectorAll('.question-btn');

btns.forEach( btn => btn.addEventListener('click', (e)=>{
    
    let targettedQuestion = e.currentTarget.parentElement.parentElement; 
   
    btns.forEach( btn => {
        let question = btn.parentElement.parentElement;

        if(question !== targettedQuestion){
            question.classList.remove('show-text');
        }
    })
    targettedQuestion.classList.toggle('show-text');
}));
