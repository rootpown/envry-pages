import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import '../index.js';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

let swipers = [];
let statusWidth = window.innerWidth > 768;

function initSwiper(className, breakpoints) {
  const elements = document.querySelectorAll(className);
  elements.forEach((element, index) => {
    if (statusWidth) {
      if (swipers[index]) {
        swipers[index].destroy(true, true); // Уничтожаем Swiper, если он существует
        swipers[index] = null; // Удаляем из массива
      }
    } else {
      if (!swipers[index]) {
        const swiper = new Swiper(element, {
          breakpoints: breakpoints,
          slidesPerView: 1,
          spaceBetween: 30,
          updateOnWindowResize: true,
        });
        swipers[index] = swiper;
      }
    }
  });
}
const breakpoints = {
  500: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
};

window.addEventListener('resize', () => {
  statusWidth = window.innerWidth > 768;
  initSwiper('.swiper', breakpoints);
  swipers.forEach((swiper) => {
    if (swiper) {
      swiper.slideTo(0, 0, false);
      swiper.update();
    }
  });
});

initSwiper('.swiper', breakpoints);
