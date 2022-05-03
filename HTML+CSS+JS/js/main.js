const btnContact = document.querySelector('.vy-btn-contact');
const toggleModal = document.querySelectorAll('.vy-toggle-modal');
const toggleMenu = document.querySelectorAll('.vy-toggle-menu');
const overlay = document.querySelector('.vy-overlay');
const menuMobile = document.querySelector('.vy-menu-mob');


//Page Load
window.addEventListener('load', function(){
    const pageLoad = document.querySelector('.vy-load');
        pageLoad.classList.add('vy-fade-out');
        setTimeout(function () {
            pageLoad.style.display = 'none';
        }, 2000);
});

//Open and Close contact information
btnContact.addEventListener('click', function(){
    let boxContact = document.querySelector('.vy-contact-info');
    boxContact.classList.toggle('vy-is-opened');
    this.classList.toggle('vy-change-icon');
});

//trocar icone do menu mobile

const replaceIcon = function (icon) {
    if(menuCloseMob){

    }
}

//Abrir e fechar menu mobile

for(let j = 0; j < toggleMenu.length; j++){
    toggleMenu[j].addEventListener('click', function(){
        menuMobile.classList.toggle('vy-menu-is-closed');
        overlay.classList.toggle('vy-is-opened');
        let menuCloseMob = document.querySelector('.vy-icon-close-menu-mob').attributes.name;
        replaceIcon(menuCloseMob);
        menuMobile.classList.toggle('vy-menu-is-open');
        
    });
}

//Toggle modal orçamento

for(let i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener('click', function(){
        let modalOrcamento = document.querySelector('#vy-modal-orcamento');
        overlay.classList.toggle('vy-is-opened');
        modalOrcamento.classList.toggle('vy-is-opened');
        modalOrcamento.classList.toggle('vy-slide-top');

    });
}

// Animate scroll waypoints 

var waypoint = new Waypoint({
    element: document.querySelector('.vy-scrolling'),
    handler: function(direction) {
    document.querySelector('.vy-scrolling').classList.toggle('vy-fade-out-scroll')
    },
    offset: '80%'
});

