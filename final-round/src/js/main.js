import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import '../index.js';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
// let swiper;
// function initSwiper() {
//   const widthStatus = window.innerWidth < 768;
//   if (!swiper == widthStatus) {
//     swiper = new Swiper('.swiper', {
//       // Optional parameters
//       slidesPerView: 'auto',
//       spaceBetween: 10,
//       direction: 'horizontal',
//       breakpoints: {
//         768: {
//           enabled: false,
//         },
//       },
//       centeredSlides: true,
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//   }
// }
// initSwiper();

let swiper;
function initSwiper() {
  const isSmallScreen = window.innerWidth < 768;
  if (isSmallScreen && !swiper) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',

      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
  // if (!isSmallScreen && swiper) {
  //   swiper.destroy(true, true);
  //   swiper = null;
  //   const swiperWrapper = document.querySelector('.swiper-wrapper');
  //   if (swiperWrapper) {
  //     swiperWrapper.style.transform = '';
  //   }
}

initSwiper();

// let swiper;
// function enableSwiper() {
//   const isSmallScreen = window.innerWidth < 768;
//   if (isSmallScreen && !swiper) {
//     swiper = new Swiper('.swiper', {
//       direction: 'horizontal',

//       loop: true,
//       slidesPerView: 'auto',
//       spaceBetween: 20,
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
//     });
//   }
//   if (!isSmallScreen && swiper) {
//     swiper.destroy(true, true);
//     swiper = null;
//     const swiperWrapper = document.querySelector('.swiper-wrapper');
//     if (swiperWrapper) {
//       swiperWrapper.style.transform = '';
//     }
//   }
// }

// function disableSwiper() {
//   if (swiper) {
//     swiper.destroy(true, true);
//     swiper = null;
//   }
// }
// function toggleSwiper() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 768 && !swiper) {
//     // Включаем свайпер на мобильных устройствах
//     enableSwiper();
//   } else if (screenWidth >= 768 && swiper) {
//     // Отключаем свайпер на десктопе
//     disableSwiper();
//   }
// }
// toggleSwiper();
