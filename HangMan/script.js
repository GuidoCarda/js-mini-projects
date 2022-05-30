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
let gessed;
const wordContainer = document.querySelector('.word');
const attemptsCounter = document.querySelector('.attempts');
const hintBtn = document.querySelector('.hint-btn');
const hintContainer = document.querySelector('.hint');
const lostGame = document.querySelector('.lost-game');
const winnedGame = document.querySelector('.winned-game');

const randomizeWord = () => {
  return words[Math.floor(Math.random() * ( words.length - 0 ) + 0)];
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
  guessed = 0;
  attempts = 5;
  updateAttempts()
  wordData = randomizeWord();
  word = [...wordData.word]
  word.forEach( letter => {
    const span = document.createElement('span');
    wordContainer.appendChild(span);
  })
}

const checkLetter = (e) => {
  const selectedLetter = e.target.textContent.toLowerCase();
  e.target.disabled = true;
  if(!word.includes(selectedLetter)){
    e.target.classList.add('is-not-in');
    attempts--;
    updateAttempts();
    if(attempts=== 0){
      lostGame.classList.add('show')
    }
    return
  }
  
  word.forEach((letter, index) => {
    if(letter === selectedLetter){
      wordContainer.children[index].textContent = letter;
      e.target.classList.add('is-in');
      guessed++;
    }
  })
  if(guessed === word.length){
    winnedGame.classList.add('show')
  }
}

const updateAttempts = () => {
  return attemptsCounter.innerHTML = `Tienes ${attempts} intentos restantes`
}

const showHint = () => {
  if(hintContainer.hasChildNodes()) return
  const hintElem = document.createElement('p');
  hintElem.textContent = wordData.hint;
  hintContainer.appendChild(hintElem); 
}

const resetGame = () => {
  console.log('entro')
  lostGame.classList.remove('show');
  winnedGame.classList.remove('show');

  letters.forEach( letterBtn => {
    letterBtn.classList.remove('is-in','is-not-in')
    letterBtn.disabled = false;
  })
  wordContainer.innerHTML = '';
  hintContainer.innerHTML = '';
  guessed = 0;
  startGame();
}

hintBtn.addEventListener('click', showHint);
document.querySelectorAll('.reset-game-btn').forEach( resetBtn => resetBtn.addEventListener('click', resetGame))

generateLetterBtns()
startGame()