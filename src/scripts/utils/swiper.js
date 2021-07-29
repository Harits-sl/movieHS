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
  // const headerPoster = new SwiperCore('.headerPoster', {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  // });
  const artist = new SwiperCore('.artist', {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      // when window width is >= 920px
      920: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    },

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
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      // when window width is >= 920px
      920: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },

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
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      // when window width is >= 920px
      920: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },

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
