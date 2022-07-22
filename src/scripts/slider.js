const sliderImg = document.querySelectorAll('.slider__img');
const radioBtn = document.querySelectorAll('.slider__radio-btn');
const arrowRight = document.querySelector('#arrow-right');
const arrowLeft = document.querySelector('#arrow-left');

let numberImg = 0;

arrowRight.addEventListener('click', () => {
    if (numberImg < sliderImg.length-1) numberImg++;
    else numberImg = 0;

    changeImg(numberImg);
});

arrowLeft.addEventListener('click', () => {
    if (numberImg > 0) numberImg--;
    else numberImg = sliderImg.length-1;

    changeImg(numberImg);
});

for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener('click', () => {
        numberImg = i;
        changeImg(numberImg);
    });
}

function changeImg(i) {
    const sliderImgActive = document.querySelector('.slider__img_active');
    const radioBtnActive = document.querySelector('.slider__radio-btn_active');

    sliderImgActive.classList.remove('slider__img_active');
    sliderImg[i].classList.add('slider__img_active');

    radioBtnActive.classList.remove('slider__radio-btn_active');
    radioBtn[i].classList.add('slider__radio-btn_active');
}