import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import '../index.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swipers = [];
let statusWidth = window.innerWidth > 767;

function initSwiper(className, breakpoints) {
  const elements = document.querySelectorAll(className);
  elements.forEach((element, index) => {
    if (statusWidth) {
      if (swipers[index]) {
        swipers[index].destroy(true, true);
        swipers[index] = null;
      }
    } else {
      if (!swipers[index]) {
        const swiper = new Swiper(element, {
          breakpoints: breakpoints,
          slidesPerView: 1,
          spaceBetween: 30,
          updateOnWindowResize: true,
          pagination: {
            el: '.swiper-pagination',
          },
        });
        swipers[index] = swiper;
      }
    }
    console.log(swipers);
  });
}

const breakpoints = {
  500: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 3,
  },
};

window.addEventListener('resize', () => {
  statusWidth = window.innerWidth > 767;
  initSwiper('.swiper', breakpoints);
  swipers.forEach((swiper) => {
    if (swiper) {
      swiper.slideTo(0, 0, false);
      swiper.update();
    }
  });
});

initSwiper('.swiper', breakpoints);

function initContent() {
  const buttons = document.querySelectorAll('.tqs_block_button');
  const elementBlocks = document.querySelectorAll('.tqs_block_style');

  elementBlocks.forEach((block, index) => {
    if (index >= elementBlocks.length - 4) {
      block.classList.add('hidden');
    }
  });

  buttons.forEach((button, buttonIndex) => {
    button.addEventListener('click', () => {
      const swiperContainer = button
        .closest('.tqs_block')
        .querySelectorAll('.tqs_block_style');
      swiperContainer.forEach((block, index) => {
        if (index >= swiperContainer.length - 4) {
          block.classList.toggle('hidden');
        }
      });
    });
  });
}

initContent();
