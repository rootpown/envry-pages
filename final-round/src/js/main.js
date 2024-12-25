import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import '../index.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swipers = [];
let statusWidth = window.innerWidth > 767;
const breakpoints = {
  500: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
};
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
  const burger = document.getElementById('burger');
  const asideBarStatus = document.querySelector('.aisde-container');
  const hideBurger = document.querySelector('.hideElements');

  burger.addEventListener('click', () => {
    asideBarStatus.classList.add('showContent');
  });
  hideBurger.addEventListener('click', () => {
    asideBarStatus.classList.remove('showContent');
  });

  elementBlocks.forEach((block, index) => {
    if (index >= elementBlocks.length - 4) {
      block.classList.add('hidden');
    }
  });
  buttons.forEach((button) => {
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

function statusEvent() {
  const toggleClass = (selector, targetClass) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelector(targetClass).classList.toggle('actives');
      });
    });
  };

  toggleClass('.icon', '.iconsstatus');
  toggleClass('.index-call', '.main_modal_child');
  toggleClass('.subindex-call', '.main_modal_append');

  document.querySelectorAll('.elems-index')?.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('.main_modal_child').classList.toggle('actives');
    });
  });

  document.querySelectorAll('.stat-index')?.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('.main_modal_append').classList.toggle('actives');
    });
  });
}

statusEvent();
initContent();
