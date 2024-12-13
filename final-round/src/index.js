const hideElements = document.querySelector('.hideElements');
const elementBurger = document.getElementById('burger');
const showContentAside = document.querySelector('.aisde-container');

showContentAside.style.display = 'none';

// Обработчик для кнопки "показать"
elementBurger.addEventListener('click', () => {
  showContentAside.style.display = 'block';
});

// Обработчик для кнопки "скрыть"
hideElements.addEventListener('click', () => {
  showContentAside.style.display = 'none';
});
