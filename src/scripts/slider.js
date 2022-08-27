const sliderImgBlock = document.querySelector('.slider__img');
const radioBtn = document.querySelectorAll('.slider__radio-btn');
const arrowRight = document.querySelector('#arrow-right');
const arrowLeft = document.querySelector('#arrow-left');

let numberImg = 0;
const img = ['bridge-1.jpg', 'bridge-2.jpg', 'bridge-3.jpg', 'bridge-4.jpg', 'bridge-5.jpg'];

arrowRight.addEventListener('click', () => {
    if (numberImg < img.length-1) numberImg++;
    else numberImg = 0;

    changeImg(numberImg);
});

arrowLeft.addEventListener('click', () => {
    if (numberImg > 0) numberImg--;
    else numberImg = img.length-1;

    changeImg(numberImg);
});

for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener('click', () => {
        numberImg = i;
        changeImg(numberImg);
    });
}

function changeImg(i) {
    sliderImgBlock.style.backgroundImage = 'url(./src/img/' + img[i] + ')';

    const radioBtnActive = document.querySelector('.slider__radio-btn_active');

    radioBtnActive.classList.remove('slider__radio-btn_active');
    radioBtn[i].classList.add('slider__radio-btn_active');
}