const sliderItem = document.querySelector('.slider-item');
const sliderNav = document.querySelector('.slider-navigation');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

sliderNav.addEventListener('click', changePic);
function changePic(evt) {
    if (evt.target === nextBtn) {
        if (sliderItem.classList.contains('slider1')) {
            sliderItem.classList.replace('slider1', 'slider2');
        } else if (sliderItem.classList.contains('slider2')) {
            sliderItem.classList.replace('slider2', 'slider3');
        } else if (sliderItem.classList.contains('slider3')) {
            sliderItem.classList.replace('slider3', 'slider1');
        }
                
    } else {
        if (sliderItem.classList.contains('slider1')) {
            sliderItem.classList.replace('slider1', 'slider3');
        }
        else if (sliderItem.classList.contains('slider2')) {
            sliderItem.classList.replace('slider2', 'slider1');
        } else if (sliderItem.classList.contains('slider3')) {
            sliderItem.classList.replace('slider3', 'slider2');
        }
    }
}
    