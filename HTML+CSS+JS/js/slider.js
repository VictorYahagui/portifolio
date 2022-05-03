//Slider

const sliderContainer = document.querySelector('.vy-slider-container');
const sliderList = document.querySelector('.vy-slider-list');
const sliderItem = document.querySelectorAll('.vy-portfolio-item');
const sliderTotalItems = sliderItem.length;
let sliderListWidth = 0;
const prevItem = document.querySelector('.vy-item-prev');
const nextItem = document.querySelector('.vy-item-next');
let sliderPosition = 0;
const currentSlide = document.querySelector('.vy-current-slide');
const totalSlide = document.querySelector('.vy-total-slide');
let currentCounter = 1;
const navItems = document.querySelectorAll('.vy-item-nav a');
const navCounter = document.querySelector('.vy-nav-counter span')

//Capture display width
const containerWidth = sliderContainer.parentElement.offsetWidth + 6;
//Atribute width

sliderContainer.style.width = containerWidth+ 'px';

for (let l = 0; l < sliderItem.length; l++){
    sliderItem[l].style.width = containerWidth+ 'px';
    
    sliderListWidth += containerWidth;
}
sliderList.style.width = sliderListWidth+ 'px';

//Hadlers

//Next Slide
const nextSlideAnimation = function(){
    let lastItem = sliderListWidth - containerWidth;

    if(lastItem == (-1*(sliderPosition))){
        return;
    }
    sliderPosition -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPosition,
        easing: 'spring(1, 80, 10, 0)'
    });
}

//Prev slider
const prevSlideAnimation = function(){
    if(sliderPosition === 0){
        return;
    }
    sliderPosition += containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPosition,
        easing: 'spring(1, 80, 10, 0)'
    });
}

// Counter formater
const counterFormater = function(number){
    if(number < 10){
        return '0'+ number;
    } else {
        return number;
    }
}

//Counter add
const counterAdd = function(){
    
    if(currentCounter < sliderTotalItems){
        currentSlide.innerHTML = counterFormater(++currentCounter);
        navCounter.innerHTML = counterFormater(currentCounter)
    }
}
//Counter Remove
const counterRemove = function(){
    
    if((currentCounter === sliderTotalItems) || (currentCounter > 1) ){
        currentSlide.innerHTML = counterFormater(--currentCounter);
        navCounter.innerHTML = counterFormater(currentCounter)
    }
}

const setActiveNav = function () {
    for (let nv = 0; nv < navItems.length; nv++) {
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));

        if (myNavNum === currentCounter) {
            navItems[nv].classList.add('vy-item-active');

        }
    }
}
//set line active
const setActiveSlide = function(){
    for (let nav = 0; nav < navItems.length; nav++){
        let navNumber = parseInt(navItems[nav].getAttribute('data-nav'));
        if (navNumber === currentCounter){
            navItems[nav].classList.add('vy-item-active');
            document.querySelectorAll('.vy-portfolio-item-box')[nav].classList.add('vy-scale-right');
            document.querySelectorAll('.vy-portfolio-item-thumb img')[nav].classList.add('vy-scale-up');
            document.querySelectorAll('.vy-portfolio-item-info')[nav].classList.add('vy-scale-right-info');   
        }
    }
}

const changeActive = function () {
    for (var rm = 0; rm < navItems.length; rm++) {
        navItems[rm].classList.remove('vy-item-active');
    }

    for (var rms = 0; rms < sliderItem.length; rms++) {
        sliderItem[rms].classList.remove('vy-slide-active');
        sliderItem[rms].querySelector('.vy-portfolio-item-box').classList.remove('vy-scale-right');
        sliderItem[rms].querySelector('.vy-portfolio-item-thumb img').classList.remove('vy-scale-up');
        sliderItem[rms].querySelector('.vy-portfolio-item-info').classList.remove('vy-scale-right-info');
    }
    setActiveNav();
    setActiveSlide();
}
//Actions

totalSlide.innerHTML = counterFormater(sliderTotalItems);
//Prev and next slider

nextItem.addEventListener('click', function(){
    nextSlideAnimation();
    counterAdd();
    changeActive();
});
prevItem.addEventListener('click', function(){
    prevSlideAnimation();
    counterRemove();
    changeActive();   
});
