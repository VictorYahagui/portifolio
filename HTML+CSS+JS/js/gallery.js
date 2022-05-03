const overlay = document.querySelector('.vy-overlay');
const frameImage = document.querySelector('.vy-gallery-frame-image');
const frameContainer = document.querySelector('.vy-gallery-frame-container');
const galleryImages = document.querySelectorAll('.vy-thumb-img');
const closeGallery = document.querySelectorAll('.vy-toggle-gallery');
const btnNext = document.querySelector('.vy-item-next');
const btnPrev = document.querySelector('.vy-item-prev');
const currentSlide = document.querySelector('.vy-current-slide');
const totalSlide = document.querySelector('.vy-total-slide');
const skeletonLoading = document.querySelector('.vy-skeleton-loading')

const counterFormater = function (number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

totalSlide.innerHTML = counterFormater(galleryImages.length);

const skeletonAnim = function (img) {
    let myImage = new Image();
    myImage.src = img;
    myImage.addEventListener('load', function () {
        skeletonLoading.classList.add('vy-fade-out');
        setTimeout(function () {
            skeletonLoading.style.display = 'none';
        }, 2200);
       
    });
}

const getImageSrc = function () {
    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function () {
            const imageSrc = this.getAttribute('data-src');
            const itemNum = this.getAttribute('data-item');
            skeletonLoading.style.display = 'flex';
            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);
            overlay.classList.add('vy-is-opened');
            frameContainer.classList.add('vy-is-opened');
            currentSlide.innerHTML = counterFormater(itemNum);

            skeletonAnim(imageSrc);
        })
    }
}
getImageSrc();

for (let i = 0; i < closeGallery.length; i++) {
    closeGallery[i].addEventListener('click', function () {
        overlay.classList.remove('vy-is-opened');
        frameContainer.classList.remove('vy-is-opened');
    })
}

const nextItem = function () {

    const currentItemNum = frameImage.getAttribute('data-index');
    const nextItemNum = parseInt(currentItemNum) + 1;
    for (let i = 0; i < galleryImages.length; i++) {
        const item = parseInt(galleryImages[i].getAttribute('data-item'));
        if (nextItemNum === item) {
            let nextSrc = galleryImages[i].getAttribute('data-src');
            let nextIndex = galleryImages[i].getAttribute('data-item');

            skeletonLoading.style.display = 'flex';
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);
            currentSlide.innerHTML = counterFormater(nextIndex);

            skeletonAnim(nextSrc);
        }
    }
}
const prevItem = function () {

    const currentItemNum = frameImage.getAttribute('data-index');
    const prevItemNum = parseInt(currentItemNum) - 1;
    for (let i = 0; i < galleryImages.length; i++) {
        const item = parseInt(galleryImages[i].getAttribute('data-item'));
        if (prevItemNum === item) {
            let prevSrc = galleryImages[i].getAttribute('data-src');
            let prevIndex = galleryImages[i].getAttribute('data-item');
            skeletonLoading.style.display = 'flex';
            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);
            currentSlide.innerHTML = counterFormater(prevIndex);

            skeletonAnim(prevSrc);
        }
    }
}
btnNext.addEventListener('click', function () {
    nextItem();
})
btnPrev.addEventListener('click', function () {
    prevItem();
})