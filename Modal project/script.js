const openModalBtn = document.querySelector('.modal-btn');
const closeModalBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');


openModalBtn.addEventListener('click', ()=>{
    modal.classList.add('show-modal');
});

closeModalBtn.addEventListener('click', ()=>{
    modal.classList.remove('show-modal');
})

