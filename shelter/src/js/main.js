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


//slider
const itemOne = '<div class="slider__item item item_1"> <img src="src/img/pets-jennifer.png" alt="pets Jennifer"><span class="slider__span">Jennifer</span><button class="slider__btn">Learn more</button></div>';
const itemTwo = '<div class="slider__item item item_2"><img src="src/img/pets-Sophia.png" alt="pets Sophia"><span class="slider__span">Sophia</span><button class="slider__btn">Learn more</button></div>';
const itemThree = '<div class="slider__item item item_3"><img src="src/img/pets-woody.png" alt="pets Woody"><span class="slider__span">Woody</span><button class="slider__btn">Learn more</button></div>';
const itemFour = '<div class="slider__item item item_4"><img src="src/img/pets-scarlet.png" alt="pets Scarlett"><span class="slider__span">Scarlett</span><button class="slider__btn">Learn more</button></div>';
const itemFive = '<div class="slider__item item item_5"><img src="src/img/pets-katrine.png" alt="pets Katrine"><span class="slider__span">Katrine</span><button class="slider__btn">Learn more</button></div>';
const itemSix = '<div class="slider__item item item_6"><img src="src/img/pets-timmy.png" alt="pets Timmy"><span class="slider__span">Timmy</span><button class="slider__btn">Learn more</button></div>';
const itemSeven = '<div class="slider__item item item_7"><img src="src/img/pets-Freddie.png" alt="pets Freddie"><span class="slider__span">Freddie</span><button class="slider__btn">Learn more</button></div>';
const itemEight = '<div class="slider__item item item_8"><img src="src/img/pets-charly.png" alt="pets Charly"><span class="slider__span">Charly</span><button class="slider__btn">Learn more</button></div>';

const arrPets = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight];

const slider = document.querySelector(".slider");
const leftSlider = document.querySelector(".left__slider");
const rightSlider = document.querySelector(".right__slider");

let prevStack = []; 
let nextStack = []; 
let currentItems = []; 

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
  slider.innerHTML = ''; 
  items.forEach(item => {
    slider.innerHTML += item;
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


// очистка массивов
function clearStacks() {
  prevStack = [];
  nextStack = [];
}

// обновление слайдера при изменении размера 
function updateSlider() {
  clearStacks();  
  currentItems = randomSlide(); 
  renderSlider(currentItems); 
}

// отображения карточек по разрешению
function visibleISlide() {
  const widthWindow = window.innerWidth;
  if (widthWindow >= 1270) {
    return 3; 
  } else if (widthWindow >= 758) {
    return 2;
  } else {
    return 1;
  }
}

window.addEventListener('resize', updateSlider);



// влево
leftSlider.addEventListener('click', () => {
  if (prevStack.length > 0) {
    nextStack.push([...currentItems]); 
    currentItems = prevStack.pop(); 
    renderSlider(currentItems);
  }else{
    currentItems = randomSlide(); 
  }
  renderSlider(currentItems); 
});


// вправо
rightSlider.addEventListener('click', () => {
  prevStack.push([...currentItems]);
  if (nextStack.length > 0) {
    currentItems = nextStack.pop();
  } else {
    currentItems = randomSlide();  
  }
  renderSlider(currentItems);
});


//открытие и закрытие модалки 


const sliderItem = document.querySelectorAll(".slider__item")
const modalWindow = document.querySelector(".modal__window_pets")
const closeModal = document.querySelector(".modal__closed")


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

// итемы

//json 
let pets;
fetch('./src/js/pets.json')
    .then(response => {
      return response.json();
    })
    .then(globalPets => {
      pets = globalPets;
      // console.log(pets);
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


//изменения данных в карточках
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
