import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import '../index.js';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

let swiper;
let checkWindow = window.innerWidth < 768;

function initSwiper() {
  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
    },
  });
}

initSwiper();
function elementBar() {
  const hideElements = document.querySelector('.hideElements');
  const showContentAside = document.querySelector('.aisde-container');

  const elementBurger = document.getElementById('burger');

  elementBurger.addEventListener('click', () => {
    showContentAside.style.display = 'block';
  });

  hideElements.addEventListener('click', () => {
    showContentAside.style.display = 'none';
  });
}

elementBar();
