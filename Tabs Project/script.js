const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    console.log(id);

    if(id){

        //Remove the .active class of all buttons
        btns.forEach( btn =>{
            btn.classList.remove('active');
        });
        
        //Set the active class to the clicked btn
        e.target.classList.add('active');


        //Remove the active class of all articles
        articles.forEach( article =>{
            article.classList.remove('active');
        });

        //Select the element that contains the content of the 
        //clicked button bases on the button dataset id
        const element = document.getElementById(id);
        //Add the active class to the corresponding content
        element.classList.add('active');
    }
});