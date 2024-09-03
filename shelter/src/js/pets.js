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