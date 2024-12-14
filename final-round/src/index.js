const hideElements = document.querySelector('.hideElements');
const elementBurger = document.getElementById('burger');
const showContentAside = document.querySelector('.aisde-container');
const showPages = document.getElementById('icon');
const textBlocks = document.querySelectorAll('.main_body__toggle-text');
const rotateBlocks = document.getElementById('rotates');
showContentAside.style.display = 'none';

elementBurger.addEventListener('click', () => {
  showContentAside.style.display = 'block';
});

hideElements.addEventListener('click', () => {
  showContentAside.style.display = 'none';
});

// showPages.addEventListener('click', (event) => {
//   event.preventDefault();
//   textBlocks.forEach((block) => {
//     if (block.style.display === 'none' || block.style.display === '') {
//       block.style.display = 'block';
//     } else {
//       block.style.display = 'none';
//     }
//   });
//   rotateBlocks.classList.toggle('rotate');
// });
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
  if (!isSmallScreen && swiper) {
    swiper.destroy(true, true);
    swiper = null;
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    // if (swiperWrapper) {
    //   swiperWrapper.style.transform = '';
    // }
  }
}
initSwiper();
window.addEventListener('resize', () => {
  initSwiper();
  if (swiper) {
    swiper.update();
  }
});
// !function checkingElements() {
//   const block = document.querySelectorAll('.block');
//   const block__list = document.querySelectorAll('.block__list');
//   const showElement = document.querySelector('.show_infromation_list');
//   const toggleDisplay = (elements) => {
//     elements.forEach((element) => {
//       element.style.display =
//         element.style.display === 'none' || element.style.display === ''
//           ? 'block'
//           : 'none';
//     });
//   };

//   showElement.addEventListener('click', () => {
//     const resolution = window.innerWidth;
//     toggleDisplay(block__list);
//     if (resolution < 1024) {
//       toggleDisplay(block);
//     }
//   });
// }

// checkingElements();
