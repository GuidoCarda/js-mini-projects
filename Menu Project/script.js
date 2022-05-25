const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
const menuContainer = document.querySelector('.section__center');
const btnsContainer = document.querySelector('.btns__container');


// Load items
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems){
  /*  Aplico el metodo map en el array menu para que por cada item del array
  //  que en este caso son objetos, genere las cards dinamicas para mostrar en el DOM
  */ 
  let displayItems = menuItems.map( item =>{
    const { img, title, desc, price } = item;
    
    return `
    <article class="menu__item">
      <img src="${img}" alt="" class="menu__item-img">
      <div class="menu__item-content">
          <div class="menu__item__title-container">
              <h4 class="menu__item-title">${title}</h4>
              <h4 class="menu__item-price">${price}</h4>
          </div>
          <p class="menu__item-text">${desc}</p>
      </div>  
    </article>`;  
  });
  /*  displayItems va a contener un array de strings, por lo tanto
  //  utilizo el metodo join para unir cada elemento en una nueva
  //  y unica string
  */  
 
  displayItems = displayItems.join('');
  menuContainer.innerHTML = displayItems;
}

function displayMenuButtons(){

  //I filtered the categories to only keep the unique ids
  const categories = menu.reduce( (values, item)=>{
    if (!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  }, ['all']);
  
  //I dinamicly generate the html code bases on the categories I reduced before
  const categoryBtn = categories.map( categorie =>{
    return ` <button data-id="${categorie}" class="filter-btn" type="button">${categorie}</button>`;
  }).join('');

  //The join method is uses to transform the categoryBtn array into an string without spaces or comas 
  //So after this I append the new categoryBtn string to the DOM

  btnsContainer.innerHTML = categoryBtn;
  //console.log(categoryBtn);

  //Now that I already have generated all the buttons, I'am selecting them for later use
  //This point is important because you cannot select dinamicly generated DOM elements before they were created
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Filter buttons 

  filterBtns.forEach( btn => {
    btn.addEventListener('click', (e)=>{
      //console.log(e.currentTarget.dataset.id);
      const targettedCategory = e.currentTarget.dataset.id;
      const menuFiltered = menu.filter( item => item.category.includes(targettedCategory));
      if(targettedCategory === "all"){
        displayMenuItems(menu);
      }else{
        displayMenuItems(menuFiltered);
      }
    })
  })

}

