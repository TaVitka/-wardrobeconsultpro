import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

let options = {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 700,
  autoplay: {
    delay: 50000,
  },
  centeredSlides: true,
  modules: [Navigation, Scrollbar, Pagination, Autoplay],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const swiperClient = new Swiper('.slider__client', options);
const swiperBlog = new Swiper('.slider__blog', options);
const swiperEvent = new Swiper('.slider__event', options);

const swiperReviews = new Swiper('.slider__reviews', {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 700,
  autoplay: {
    delay: 50000,
  },
  modules: [Navigation, Scrollbar, Pagination, Autoplay],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass, index, total) {

      return `<span>0</span><span class="${currentClass}"></span> | <span>0</span><span class="${totalClass}"></span>`
    }
  },
})

const swiperOutfit = new Swiper('.slider__outfit', {
  slidesPerView: 2,
  spaceBetween: 64,
  slidesPerGroup: 2,
  speed: 700,
  autoplay: {
    delay: 50000,
  },
  modules: [Navigation, Scrollbar, Pagination, Autoplay],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});
