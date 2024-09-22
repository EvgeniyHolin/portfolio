const burgerBtn = document.querySelector('.burger');
const headerEl = document.querySelector('.header');
const footerEl = document.querySelector('.footer');

burgerBtn.addEventListener('click', () => {
  headerEl.classList.toggle("header--open");
  footerEl.classList.toggle("footer--nav");
});