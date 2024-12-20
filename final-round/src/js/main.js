import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import '../index.js';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

let swipers = [];
let statusWidht = window.innerWidth < 768;
function initSwiper(className, breakpoints) {
  const elements = document.querySelectorAll(className);
  elements.forEach((element) => {
    const swiper = new Swiper(element, {
      breakpoints: breakpoints,
      slidesPerView: 1,
      spaceBetween: 20,
    });
    if (!className >= statusWidht) {
      swipers.destroy(true, true);
    }
    swipers.push(swiper);
  });

  console.log(swipers);
}
const breakpoints = {
  500: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
};
initSwiper('.swiper', breakpoints);
