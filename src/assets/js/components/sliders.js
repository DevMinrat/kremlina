const introSlider = new Swiper(".intro-slider", {
  slidesPerView: "auto",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 0,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // navigation: {
  //   nextEl: ".intro-slider__btn-next",
  //   prevEl: ".intro-slider__btn-prev",
  // },

  breakpoints: {
    //   900: {
    //     spaceBetween: 50,
    //   },
    //   1350: {
    //     slidesPerView: "auto",
    //     spaceBetween: 80,
    //   },
  },
});
const newsBlockSlider = new Swiper(".news-block__slider", {
  slidesPerView: "auto",
  spaceBetween: 90,

  navigation: {
    nextEl: ".slider__btn-next",
    prevEl: ".slider__btn-prev",
  },

  breakpoints: {
    //   900: {
    //     spaceBetween: 50,
    //   },
    //   1350: {
    //     slidesPerView: "auto",
    //     spaceBetween: 80,
    //   },
  },
});
const achievementsSlider = new Swiper(".achievements-slider", {
  slidesPerView: "auto",
  spaceBetween: 40,

  navigation: {
    nextEl: ".slider__btn-next",
    prevEl: ".slider__btn-prev",
  },

  breakpoints: {
    //   900: {
    //     spaceBetween: 50,
    //   },
    //   1350: {
    //     slidesPerView: "auto",
    //     spaceBetween: 80,
    //   },
  },
});
const rewardsSlider = new Swiper(".rewards-slider", {
  slidesPerView: "auto",
  spaceBetween: 40,

  breakpoints: {
    //   900: {
    //     spaceBetween: 50,
    //   },
    //   1350: {
    //     slidesPerView: "auto",
    //     spaceBetween: 80,
    //   },
  },
});