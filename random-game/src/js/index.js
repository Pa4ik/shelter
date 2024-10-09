const body = document.getElementById('body');


  const wordsAndQuest = [
    {
        word: "Пенициллин",
        Quest: "Что было создано благодаря грибам-плесени?",
    },
    {
        word: "Олимпиада",
        Quest: "Как звали маму Македонского?",
    },
    {
        word: "Салага",
        Quest: "Новобранец на флоте – это …",
    },
    {
        word: "Танго",
        Quest: "Какой танец считается самым страстным?",
    },
    {
        word: "Минск",
        Quest: "Назовите город-столицу Республики Беларусь",
    },
    {
        word: "Клепсидра",
        Quest: "Каким словом называли в древние времена водяные часы?",
    },
    {
        word: "Прополис",
        Quest: "Как называется пчелиный клей?",
    },
    {
        word: "Мука",
        Quest: "Какой основной ингредиент нужен для создания пирожков?",
    },
]


body.innerHTML = `
    <header class="header">
        <h1 class="h1">Hangman</h1>
        <audio  id="audio"></audio>
    </header>
    <main class="main">
        <div class="gallows__block">
            <img class="gallows" src="./src/gallows-img/gallows-0.png">
        </div>
        <div class="keyboard__text">
            <div class="input__span">
                <p id="world__text">Слово:</p>
                <Span id='quest__text'>Вопрос:</Span>
                <p id="incorrect">Неверные буквы 0/6</p>
            </div>
            <div class="keyboard" id="keyboard">
            </div>
        </div>
        <div class="modal-menu">
            <div id="modals" class="modal-menu-info">
               <div class="modal-menu-window">
                    <h3 id="win__loss"></h3>
                    <span id="word">Слово:</span>
                    <button id="reset">Играть еще раз</button>   
               </div>
            </div>
        </div> 
    </main>
     <footer class="footer">
        <div class="footer__div">
            <p class="">2024</p>
             <a class="link svg__size" href="https://rs.school/courses/javascript-preschool-ru" target="_blank">
                <img class="svg__size" src="src/img/rss-logo.svg" alt="logo__school">
            </a>
            <a class="link" href="https://github.com/Pa4ik" target="_blank"><p>Maxim</p></a>
        </div>
    </footer>  
   `

   const lossWin = document.getElementById("win__loss");
   const wordGame = document.getElementById("word")
   const btnReset = document.getElementById("reset")

  
function generateBtn() {
    let buttonsHTML = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ'.split('').map(letter =>
          `<button
              class='key'
              data-key='${letter}'
            >
              ` + letter + `
            </button>
          `).join('');
        document.getElementById('keyboard').innerHTML = buttonsHTML;
      }
generateBtn()


const keyboard = document.getElementById('keyboard');
const worldText = document.getElementById('world__text');
const incorrect = document.getElementById('incorrect');


keyboard.addEventListener('click', clickKey);
document.addEventListener('keydown', pressKey);


let guessedLetters = [];
let incorrectLetter = 0;
const maxIncorrectLetter = 6;


function clickKey(event) {
    const key = event.target.innerText;
    if (key) {
        checkLetter(key);
        event.target.disabled = true;
    }
}


function pressKey(event) {
    const key = event.key.toUpperCase();
    if (/^[А-Я]$/.test(key)) {
        const button = document.querySelector(`.key[data-key='${key}']`);
        if (button) {
           checkLetter(key);
           button.disabled = true;
        }
    }
}


function checkLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!currentWord.includes(letter)) {
            incorrectLetter++;
            updateImgAndIncorrect ()
        }
        updateWord();
    } 
    }


    function updateWord() {
        let displayText = '';
        for (const char of currentWord) {
            if (guessedLetters.includes(char)) {
                displayText += char;
            } else {
                displayText += '_';
            }
        }
        worldText.innerHTML = `Слово: ${displayText}`;
        if (!displayText.includes('_')) {
            modal.classList.add("menu-active");
            lossWin.innerHTML = `Ты выиграл!`;
            wordGame.innerHTML = `Слово: ${currentWord}`;
            winGame()
        }
    }


    const modal = document.getElementById("modals")


    function updateImgAndIncorrect () {
        incorrect.innerHTML =`Неверные буквы ${incorrectLetter}/6`
        document.querySelector('.gallows').src = "./src/gallows-img/gallows-" + incorrectLetter + ".png";
        upImg()
        if ( incorrectLetter === maxIncorrectLetter ){
            modal.classList.add("menu-active");
            lossWin.innerHTML = `Ты проиграл`
            wordGame.innerHTML = `Слово: ${currentWord}`
            lossGame() 
        } 
    }


    btnReset.addEventListener('click', resetGame);

    function resetGame() {
        guessedLetters = [];
        incorrectLetter = 0;
        updateImgAndIncorrect();
 
        currentWordIndex = Math.floor(Math.random() * wordsAndQuest.length);
        currentWord = wordsAndQuest[currentWordIndex].word.toUpperCase();
        currentQuest = wordsAndQuest[currentWordIndex].Quest;

        console.log(currentWord)

        worldText.innerHTML = `Слово: ${hideWord(currentWord)}`;
        document.getElementById('quest__text').textContent = `Вопрос: ${currentQuest}`;

     
        const keyBtn = document.querySelectorAll('.key');
        keyBtn.forEach(button => {
            button.disabled = false;
        });

        modal.classList.remove("menu-active");
        lossWin.innerHTML = '';
        wordGame.innerHTML = '';
    }


let currentWordIndex = Math.floor(Math.random() * wordsAndQuest.length);
let currentWord = wordsAndQuest[currentWordIndex].word.toUpperCase();
let currentQuest = wordsAndQuest[currentWordIndex].Quest;
console.log(currentWord)


worldText.innerHTML = `Слово: ${hideWord(currentWord)}`;
document.getElementById('quest__text').textContent = `Вопрос: ${currentQuest}`;


function hideWord(word) {
 return word.replace(/./g, '_');
}

const audio = document.getElementById('audio');

let winGame = function() {
    audio.src = 'src/audio/win.mp3';
    audio.play()
    audio.volume = 0.3;
  }

  let lossGame = function() {
    audio.src = 'src/audio/gg.mp3';
    audio.play()
    audio.volume = 0.3;
  } 


  let upImg = function() {
    audio.src = 'src/audio/up.mp3';
    audio.play()
    audio.volume = 0.3;
  } 