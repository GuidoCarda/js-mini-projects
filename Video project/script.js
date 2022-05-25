// 1- Select the switcher element  
// 2- Add an click event listener

const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

// Pause/play button
switchBtn.addEventListener('click', ()=>{
    if(!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide');
        video.pause();
    }else{
        switchBtn.classList.remove('slide');
        video.play();
    }
})

// PreLoader


const preLoader = document.querySelector('.preloader');
window.addEventListener('load', ()=>{
    preLoader.classList.add('hide-preloader');
})

