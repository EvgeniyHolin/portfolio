const burgerBtn = document.querySelector('.burger');
const headerEl = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
  headerEl.classList.toggle('header--open');
});
