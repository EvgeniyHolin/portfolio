import Swiper from "/node_modules/swiper/swiper.min.mjs";

export function swiperFunc() {
  const sliderEl = document.querySelector('.swiper');
  const swiper = new Swiper(sliderEl, {
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });
};