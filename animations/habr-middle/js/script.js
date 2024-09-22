const burgerBtn = document.querySelector('.header__burger');
const headerEl = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
  headerEl.classList.toggle('header--open');
});
