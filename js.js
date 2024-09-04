 <div class="pets__slider">
                        <button class="btn__slider">
                            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2V4H3V6L0 3L3 0V2H14Z" fill="#292929"/>
                                </svg>                                
                        </button>
                        <div class="slider">
                            <div class="slider__item item item_5">
                                <img src="src/img/pets-katrine.png" alt="pets katrine">
                                <span class="slider__span">Katrine</span>
                                <button class="slider__btn">Learn more</button>
                            </div>
                            <div class="slider__item item item_1">
                                <img src="src/img/pets-jennifer.png" alt="pets Jennifer">
                                <span class="slider__span">Jennifer</span>
                                <button class="slider__btn">Learn more</button>
                            </div>
                            <div class="slider__item item item_3">
                                <img src="src/img/pets-woody.png" alt="pets Woody">
                                <span class="slider__span">Woody</span>
                                <button class="slider__btn">Learn more</button>
                            </div>
                            <div class="slider__item item item_2">
                                <img src="src/img/pets-Sophia.png" alt="pets Sophia">
                                <span class="slider__span">Sophia</span>
                                <button class="slider__btn">Learn more</button>
                            </div>
                            <div class="slider__item item item_6">
                                <img src="src/img/pets-timmy.png" alt="pets Timmy">
                                <span class="slider__span">Timmy</span>
                                <button class="slider__btn">Learn more</button>
                            </div>
                            <div class="slider__item item item_8">
                                <img src="src/img/pets-charly.png" alt="pets Charly">
                                <span class="slider__span">Charly</span>
                                <button class="slider__btn">Learn more</button>
                            </div>
                            <div class="slider__item item item_4">
                                <img src="src/img/pets-scarlet.png" alt="pets Scarlett">
                                <span class="slider__span">Scarlett</span>
                                <button class="slider__btn">Learn more</button>
                            </div>
                            <div class="slider__item item item_7">
                                <img src="src/img/pets-Freddie.png" alt="pets Freddie">
                                <span class="slider__span">Freddie</span>
                                <button class="slider__btn">Learn more</button>
                            </div>
                        </div>
                        <button class="btn__slider">
                            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 4V2L11 2V0L14 3L11 6V4L0 4Z" fill="#292929"/>
                                </svg> 
                        </button>
                    </div>
.pets__slider{
    display: flex;
    align-items: center;
    gap: 37px;
}

.btn__slider{
    display: grid;
    padding: 21px 17px;
    border-radius: 100px ;
    border: 2px;
    border: 2px solid #F1CDB3;
    transition:  0.7s;
    cursor: pointer;
    background-color: #F6F6F6;
}

.slider{
    display: flex;
    overflow: hidden;
    width: 100%;
    gap: 61px;
}


.slider__item{
    width: 270px;
    gap: 30px;
    border-radius: 9px;
    display: grid;
    justify-items: center;
    background: #FAFAFA;
    padding-bottom:30px;
    margin: 15px;
    transition:  0.7s;
}

.slider__span{
    font-family: Georgia ,sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 22.72px;
    letter-spacing: 0.06em;
    text-align: center;
    color: #545454;
}

.slider__btn{
    color: #292929;
    font-family: Georgia ,sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 22.1px;
    letter-spacing: 0.06em;
    text-align: left;
    border: 2px solid #F1CDB3;;
    padding: 13px 43px;
    border-radius: 100px; 
    background: #FAFAFA;
    transition:  0.7s; 
    cursor: pointer;
}
 @media (max-width:1237px){

    .slider{
        justify-content: center;
    }

    .slider__item:nth-last-child(-n+6) { 
        display: none;
      }
}



@media (max-width:768px){

    .pets__content_box {
        padding: 80px 30px 99px;
    }

    .slider {
        gap: 13px;
    }

    .pets__slider {
        gap: 0px;
    }

    .slider__item{
        margin-left: 12px;
    }
  
}

@media (max-width: 760px) {
    .slider__item:nth-last-child(-n+7) { 
        display: none;
      }
    
 }




 @media (max-width: 440px) {
.pets__content_box {
    padding: 41px 0px 42px;
    gap: 26px;
}

.pets__slider {
    row-gap: 5px;
    column-gap: 80px;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 16px;
}

.slider {
    padding-left: 3px;
}
.btn__slider{
    order: 1;
}
} 

еализация слайдера-карусели на странице 
при нажатии на стрелки происходит переход к новому блоку элементов
смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется)
слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек
при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px)
каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
в текущем блоке слайда карточки с питомцами не повторяются: 
в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: 
сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного: 
при каждой перезагрузке страницы формируется новая последовательность карточек: 
генерация наборов карточек происходит на основе 8 объектов с данными о животных: 
при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования):