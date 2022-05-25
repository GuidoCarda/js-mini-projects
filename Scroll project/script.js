
// ******** set date ************

const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// ******* close links ***********
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', ()=>{
    linksContainer.classList.toggle('show-links');
});

// ****** fixed navbar *********

const navbar = document.getElementById('nav');
const scrollTopBtn = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
   const scrollHeight = window.pageYOffset;
   const navbarHeight = navbar.getBoundingClientRect().height;

   if(scrollHeight>navbarHeight){
       navbar.classList.add('fixed-navbar');
   }else{
    navbar.classList.remove('fixed-navbar');
   }

   if(scrollHeight > 500){
       scrollTopBtn.classList.add('show-top-link');
   }else{
       scrollTopBtn.classList.remove('show-top-link');
   }

});


// ******** smooth scroll ******

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        //Prevent default
        e.preventDefault();
        //navigate to specific spot
        const linkId = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(linkId);
        //calculate the heights 
        const linksContainerHeight = linksContainer.getBoundingClientRect.height;
        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-navbar');
        
        // console.log(navHeight);
        let elementPosition = element.offsetTop - navHeight ;
        
        //Check if the nav is fixed
        if (!fixedNav){
            elementPosition = elementPosition - navHeight;
        }
        //Check if the menu is open ( mobile view )
        //The number 100 refers to 100px
        if(navHeight>100){
            elementPosition = elementPosition + linksContainerHeight;
        }
        
        window.scrollTo({
            left:0,
            top: elementPosition
        });

        linksContainer.classList.remove('show-links');
    })
});