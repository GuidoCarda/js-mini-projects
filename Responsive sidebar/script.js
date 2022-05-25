const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('show-sidebar');
});

toggleBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('show-sidebar');
});
