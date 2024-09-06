// бугрер меню
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navigation = nav?.querySelectorAll("a");
const rearBackground = document?.querySelector(".background__rear")


// откртие закрытие на бургер
burger?.addEventListener("click" , () => {
   burger?.classList.toggle("burger--active");
   nav?.classList.toggle("navigation-visibl");
   document.body.classList.toggle("hidden-overflow") 
   rearBackground.classList.toggle("background__rear_active")
});

navigation.forEach(el => {
    el.addEventListener("click", () => {
        burger?.classList.remove("burger--active");
        nav?.classList.remove("navigation-visibl");   
        document.body.classList.remove("hidden-overflow") 
        rearBackground.classList.remove("background__rear_active")
    })
});

//Закрытие на ecp и вне блока 
window.addEventListener ("keydown", function(event){
    if (event.keyCode === 27){
        burger?.classList.remove("burger--active");
        nav?.classList.remove("navigation-visibl");
        document.body.classList.remove("hidden-overflow")
        rearBackground.classList.remove("background__rear_active")    
    }
  })
  
rearBackground.addEventListener("click", function(event){
    if (!event.target.classList.contains("burger--active") && !event.target.closest(".navigation")) {
      burger?.classList.remove("burger--active");
      nav?.classList.remove("navigation-visibl"); 
      document.body.classList.remove("hidden-overflow") 
      rearBackground.classList.remove("background__rear_active")    
    } 
  });

// При изменении размеров экрана для бугрега 
function burgerSize() {
  if (window.innerWidth > 768) {
    burger?.classList.remove("burger--active");
      nav?.classList.remove("navigation-visibl"); 
      document.body.classList.remove("hidden-overflow")
      rearBackground.classList.remove("background__rear_active")   
  } else {
  }
}

window.addEventListener("resize", burgerSize);


//открытие и закрытие модалки 

const sliderItem = document.querySelectorAll(".slider__item")
const modalWindow = document.querySelector(".modal__window_pets")
const closeModal =document.querySelector(".modal__closed")


sliderItem.forEach(item => {
  item.addEventListener("click", function() {
    modalWindow.classList.add("modal_active");
    document.documentElement.style.overflow = 'hidden';
  });
});


window.addEventListener ("keydown", function(event){
  if (event.keyCode === 27){
      modalWindow.classList.remove("modal_active"); 
  }
})

closeModal.addEventListener("click" , () => {
  modalWindow.classList.remove("modal_active");  
  document.documentElement.style.overflow = '';
});

rearBackground.addEventListener("click", function(event){
  if (!event.target.classList.contains("burger--active") && !event.target.closest(".navigation")) {
    modalWindow.classList.remove("modal_active");  
    document.documentElement.style.overflow = '';
  } 
});

window.addEventListener('click', (event) => {
  if (event.target === modalWindow) {
    modalWindow.classList.remove("modal_active");  
    document.documentElement.style.overflow = '';
  }
});




// страницы 
const itemOne = '<div class="slider__item item item_1"> <img src="src/img/pets-jennifer.png" alt="pets Jennifer"><span class="slider__span">Jennifer</span><button class="slider__btn">Learn more</button></div>';
const itemTwo = '<div class="slider__item item item_2"><img src="src/img/pets-Sophia.png" alt="pets Sophia"><span class="slider__span">Sophia</span><button class="slider__btn">Learn more</button></div>';
const itemThree = '<div class="slider__item item item_3"><img src="src/img/pets-woody.png" alt="pets Woody"><span class="slider__span">Woody</span><button class="slider__btn">Learn more</button></div>';
const itemFour = '<div class="slider__item item item_4"><img src="src/img/pets-scarlet.png" alt="pets Scarlett"><span class="slider__span">Scarlett</span><button class="slider__btn">Learn more</button></div>';
const itemFive = '<div class="slider__item item item_5"><img src="src/img/pets-katrine.png" alt="pets Katrine"><span class="slider__span">Katrine</span><button class="slider__btn">Learn more</button></div>';
const itemSix = '<div class="slider__item item item_6"><img src="src/img/pets-timmy.png" alt="pets Timmy"><span class="slider__span">Timmy</span><button class="slider__btn">Learn more</button></div>';
const itemSeven = '<div class="slider__item item item_7"><img src="src/img/pets-Freddie.png" alt="pets Freddie"><span class="slider__span">Freddie</span><button class="slider__btn">Learn more</button></div>';
const itemEight = '<div class="slider__item item item_8"><img src="src/img/pets-charly.png" alt="pets Charly"><span class="slider__span">Charly</span><button class="slider__btn">Learn more</button></div>';

const arrPets = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight];

const sliderPets = document.querySelector(".slider__pets");
const left = document.querySelector(".left");
const leftAll = document.querySelector(".left_all");
const right = document.querySelector(".right");
const rightAll = document.querySelector(".right_all");
const numberPage = document.querySelector(".number")


let prevStack = []; 
let nextStack = []; 
let currentItems = [];


// создания массива 
let petsArr = [];
for (let i = 0; i < 6; i++) {
  petsArr = petsArr.concat(arrPets.sort(() => Math.random() - 0.5)); 
}

let totalPages = allTotalPages();
let currPage = 1;


// отображения страниц
function renderPage(pageNumber) {
  let visibleSlides = visibleISlide(); 
  let startIndex = (pageNumber - 1) * visibleSlides;
  let endIndex = startIndex + visibleSlides;
  let itemsToRender = petsArr.slice(startIndex, endIndex);

  renderSlider(itemsToRender);
  updatePagBtn();
  pageNumbers();
}

// обновления страницы 
function pageNumbers() {
  numberPage.querySelector(".span__pets").textContent = currPage;
}

// состояние кнопок
function updatePagBtn() {
  if (currPage === 1) {
    left.classList.add("disabled__btn__slider__pets");
    leftAll.classList.add("disabled__btn__slider__pets");
  } else {
    left.classList.remove("disabled__btn__slider__pets");
    leftAll.classList.remove("disabled__btn__slider__pets");
  }

  if (currPage === totalPages) {
    right.classList.add("disabled__btn__slider__pets");
    rightAll.classList.add("disabled__btn__slider__pets");
  } else {
    right.classList.remove("disabled__btn__slider__pets");
    rightAll.classList.remove("disabled__btn__slider__pets");
  }
}

// кнопки лево и право
left.addEventListener("click", () => {
  if (currPage > 1) {
    currPage--;
    renderPage(currPage);
  }
});

right.addEventListener("click", () => {
  if (currPage < totalPages) {
    currPage++;
    renderPage(currPage);
  }
});

leftAll.addEventListener("click", () => {
  currPage = 1;
  renderPage(currPage);
});

rightAll.addEventListener("click", () => {
  currPage = totalPages;
  renderPage(currPage);
});



// рандомные карточки 
function randomSlide() {
  const visibleSlides = visibleISlide();
  const itemsSlide = arrPets.filter(item => !currentItems.includes(item));
  const randomItems = [];
  while (randomItems.length < visibleSlides) {
    const randomIndex = Math.floor(Math.random() * itemsSlide.length);
    const randomItem = itemsSlide.splice(randomIndex, 1)[0];
    randomItems.push(randomItem);
  }
  return randomItems;
}

//рендер карточек
function renderSlider(items) {
  sliderPets.innerHTML = ''; 
  items.forEach(item => {
    sliderPets.innerHTML += item;
  });
  openModalClick()
}

function getSlider() {
  currentItems = randomSlide();
  for (let i = 0; i < 3; i++) { 
    const prevItems = randomSlide();
    prevStack.push(prevItems);
  }
  renderSlider(currentItems);
  openModalClick(); 
}
getSlider();


// Функция для размера экрана
window.addEventListener("resize", () => {
  let newTotalPages = allTotalPages();
  if (newTotalPages !== totalPages) {
    totalPages = newTotalPages;
    if (currPage > totalPages) {
      currPage = totalPages;
    }
    renderPage(currPage);
  }
});


// отображения карточек по разрешению
function visibleISlide() {
  const widthWindow = window.innerWidth;
  if (widthWindow >= 1270) {
    return 8; 
  } else if (widthWindow >= 758) {
    return 6;
  } else {
    return 3;
  }
}


//для страниц 6/8/16
function allTotalPages() {
  const widthWindow = window.innerWidth;
  if (widthWindow >= 1270) {
    return 6; 
  } else if (widthWindow >= 758) {
    return 8;
  } else {
    return 16;
  }
}

renderPage(currPage);



// итемы

//json 
let pets;
fetch('./src/js/pets.json')
    .then(response => {
      return response.json();
    })
    .then(globalPets => {
      pets = globalPets;
      console.log(pets);
    });


const imgModal = document.querySelector('.img__modal') 
const namePets = document.querySelector('.modal__info_namepets')
const infoDog = document.querySelector('.modal__info_dog')  
const modalDescription = document.querySelector('.modal__info_description')  
const modalAge = document.querySelector('.atr_age')  
const atrInoculation = document.querySelector('.atr_inoculation')  
const atrDiseases = document.querySelector('.atr_diseases')  
const atrParasites = document.querySelector('.atr_parasites') 
//все карточки 
const item1 = document?.querySelector(".item_1");
const item2 = document?.querySelector(".item_2");
const item3 = document?.querySelector(".item_3");
const item4 = document?.querySelector(".item_4");
const item5 = document?.querySelector(".item_5");
const item6 = document?.querySelector(".item_6");
const item7 = document?.querySelector(".item_7");
const item8 = document?.querySelector(".item_8");


function modalContent(index) { 
  imgModal.src = pets[index - 1].img;
  namePets.innerHTML = `${pets[index-1].name}`;
  infoDog.innerHTML = `${pets[index-1].type} - ${pets[index-1].breed}`;
  modalDescription.innerHTML = `${pets[index-1].description}`;
  modalAge.innerHTML = `${pets[index-1].age}`;
  atrInoculation.innerHTML = `${pets[index-1].inoculations}`;
  atrDiseases.innerHTML = `${pets[index-1].diseases}`;
  atrParasites.innerHTML = `${pets[index-1].parasites}`;
}


//открытия модалок в слайдере
function openModalClick() {
  const sliderItems = document.querySelectorAll(".slider__item");

  sliderItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("item_1")) {
        modalContent(1); 
      } else if (item.classList.contains("item_2")) {
        modalContent(2); 
      } else if (item.classList.contains("item_3")) {
        modalContent(3);
      } else if (item.classList.contains("item_4")) {
        modalContent(4);
      } else if (item.classList.contains("item_5")) {
        modalContent(5);
      } else if (item.classList.contains("item_6")) {
        modalContent(6);
      } else if (item.classList.contains("item_7")) {
        modalContent(7);
      } else if (item.classList.contains("item_8")) {
        modalContent(8);
      }
      else {
      }
      modalWindow.classList.add("modal_active");
      document.documentElement.style.overflow = 'hidden';
    });
  });
}
