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