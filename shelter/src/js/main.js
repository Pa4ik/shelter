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


item1?.addEventListener("click", () => {
  localStorage.setItem('item', 1); 
  modalContent(1);
  });
  item2?.addEventListener("click", () => {
  modalContent(2);
  localStorage.setItem('item', 2);  
  });
  item3?.addEventListener("click", () => {
    localStorage.setItem('item', 3); 
  modalContent(3);
  });
  item4?.addEventListener("click", () => {
    localStorage.setItem('item', 4); 
  modalContent(4);
  });
  item5?.addEventListener("click", () => {
    localStorage.setItem('item', 5); 
  modalContent(5);
  });
  item6?.addEventListener("click", () => {
    localStorage.setItem('item', 6); 
  modalContent(6);
  });
  item7?.addEventListener("click", () => {
    localStorage.setItem('item', 7);  
  modalContent(7);
  });
  item8?.addEventListener("click", () => {
    localStorage.setItem('item', 8); 
  modalContent(8);
  });