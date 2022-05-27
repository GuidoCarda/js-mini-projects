const words = [
  {
    id: 1,
    word: "teclado",
    category: "tech",
    hint: "Consiste en un conjunto de teclas o botones dispuestos de manera horizontal sobre una lámina, donde actúan como palancas mecánicas o interruptores electrónicos, permitiendo así el ingreso de información codificada al sistema informático por parte del usuario."
  },
  {
    id: 2,
    word: "monitor",
    category: "tech",
    hint: "Dispositivo electrónico de salida de la computadora en el que se muestran las imágenes y textos generados por medio de un adaptador gráfico o de video de ésta"
  },
  {
    id: 3,
    word: "mouse",
    category: "tech",
    hint: "Se maneja con una sola mano y permite dirigir el movimiento del puntero sobre la pantalla para transmitir órdenes diversas."
  },
  {
    id: 4,
    word: "auricular",
    category: "tech",
    hint: "Dispositivo periférico de salida que se utiliza para escuchar audio desde un dispositivo electrónico"
  }
]

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
let word = "";
let attempts;

const letterContainer = document.querySelector('.letter-list');
let letters;
const wordContainer = document.querySelector('.word');
const attemptsCounter = document.querySelector('.attempts');
const hintBtn = document.querySelector('.hint-btn');
const hintContainer = document.querySelector('.hint');

const randomizeWord = () => {
  return Math.floor(Math.random() * ( words.length - 0 ) + 0);
}

const generateLetterBtns = () => {
  let displayLetters = alphabet.map( char => {
    return`
    <li>
      <button class="letter-btn" id="${char}">${char}</button>
    </li>`;
  })
  displayLetters = displayLetters.join('');
  letterContainer.innerHTML = displayLetters;
  letters = document.querySelectorAll(".letter-btn");
  letters.forEach( btn => btn.addEventListener( 'click' ,(e) => checkLetter(e)));
}


const startGame = () => {
  attempts = 5;
  updateAttempts()
  wordData = words[randomizeWord()]
  word = [...wordData.word]
  console.log( word )
  word.forEach( letter => {
    const span = document.createElement('span');
    wordContainer.appendChild(span);
  })
}

const checkLetter = (e) => {
  if(attempts=== 0) return alert('No more attempts')
  const selectedLetter = e.target.textContent.toLowerCase();
  e.target.disabled = true;
  if(!word.includes(selectedLetter)){
    e.target.classList.add('is-not-in');
    attempts--;
    updateAttempts();
    return
  }
  
  word.forEach((letter, index) => {
    if(letter === selectedLetter){
      wordContainer.children[index].textContent = letter;
      e.target.classList.add('is-in');
    }
  })
}

const updateAttempts = () => {
  return attemptsCounter.innerHTML = `Tienes ${attempts} intentos restantes`
}


const showHint = () => {
  console.log(word);
  hintContainer.innerHTML = wordData.hint;
}

hintBtn.addEventListener('click', showHint)

generateLetterBtns()
startGame()