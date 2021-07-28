import SwiperCore, { Navigation, Scrollbar, EffectFade } from 'swiper/core';
// import Swiper styles

// configure Swiper to use modules
SwiperCore.use([Navigation, Scrollbar, EffectFade]);
// init Swiper:

const swiper = () => {
  const header = new SwiperCore('.header', {
    spaceBetween: 30,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const headerPoster = new SwiperCore('.headerPoster', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
  const artist = new SwiperCore('.artist', {
    slidesPerView: 7,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: '.button-next-artist',
      prevEl: '.button-prev-artist',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });
  const movieTrending = new SwiperCore('.trending', {
    slidesPerView: 6,
    spaceBetween: 5,

    // Navigation arrows
    navigation: {
      nextEl: '.button-next-trending',
      prevEl: '.button-prev-trending',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });
  const movieTopRated = new SwiperCore('.top-rated', {
    slidesPerView: 6,
    spaceBetween: 5,

    // Navigation arrows
    navigation: {
      nextEl: '.button-next-top-rated',
      prevEl: '.button-prev-top-rated',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });
};

export default swiper;
