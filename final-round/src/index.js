let swiper;

function initSwiper() {
  const isSmallScreen = window.innerWidth < 768;
  // меньше 768 пикс и если нету свайпера
  if (isSmallScreen && !swiper) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
  if (!isSmallScreen && swiper) {
    swiper.destroy(true, true);
    swiper = null;
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (swiperWrapper) {
      swiperWrapper.style.transform = '';
    }
  }
}
initSwiper();

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
