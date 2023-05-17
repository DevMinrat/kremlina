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
    300: {
      spaceBetween: 16,
    },
    501: {
      spaceBetween: 90,
    },
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
    300: {
      spaceBetween: 16,
    },
    501: {
      spaceBetween: 40,
    },
  },
});
const aboutInfoSlider = new Swiper(".about-info__inner", {
  slidesPerView: "auto",
  spaceBetween: 40,

  breakpoints: {
    300: {
      spaceBetween: 16,
    },
    501: {
      spaceBetween: 40,
    },
  },
});
const rewardsSlider = new Swiper(".rewards-slider", {
  slidesPerView: "auto",
  spaceBetween: 40,

  breakpoints: {
    300: {
      spaceBetween: 16,
    },
    501: {
      spaceBetween: 40,
    },
  },
});

let sertifSlider = new Swiper(".sertif__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
});

function toggleSertifSlider() {
  if (window.innerWidth > 920) {
    sertifSlider.destroy(true, true);
  } else {
    sertifSlider = new Swiper(".sertif__slider", {
      slidesPerView: "auto",
      spaceBetween: 20,
    });
  }
}

if (document.querySelector(".sertif__slider")) {
  toggleSertifSlider();
}

window.addEventListener("resize", () => {
  if (document.querySelector(".sertif__slider")) {
    toggleSertifSlider();
  }
});

const productSlider = new Swiper(".product-img__slider", {
  slidesPerView: "auto",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 0,

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
