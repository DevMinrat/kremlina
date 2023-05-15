const priceFixBtn = document.querySelector(".fixed-price-btn");
const priceIntroBtn = document.querySelector(".intro-slider__price-btn");
const buyIntroBtn = document.querySelector(".intro-slider__first-buy");

if (priceFixBtn && window.innerWidth <= 500) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: buyIntroBtn,
      start: "top bottom-=200",
      end: "+=300 center",
      scrub: true,
    },
  });

  tl.to(priceIntroBtn, {
    top: "150%",
    right: "-20%",
    scale: 0,
  }).to(
    priceFixBtn,
    {
      y: "-160%",
    },
    "-=40%"
  );
}
const introBlock = document.querySelector(".intro");
const introFruits = document.querySelectorAll(
  ".intro-slider__first .anim-fruit"
);
const introAlmond = document.querySelector(".is-almond__wrapper");
const introPrunes = document.querySelector(".is-prunes__wrapper");
const introCherry = document.querySelector(".is-cherry__wrapper");
const introHollowCircle = document.querySelector(".hollow-circle");
const introFilledCircle = document.querySelector(".filled-circle");
const introImg = document.querySelector(".is-slide__main-img");

if (introBlock && window.innerWidth > 500) {
  const introTl = gsap.timeline();

  introTl
    .fromTo(
      introHollowCircle,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.6,
      }
    )
    .fromTo(
      introFilledCircle,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.6,
      }
    )
    .fromTo(
      introImg,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
      }
    )
    .from(introAlmond, {
      y: -300,
      opacity: 0,
    })
    .from(
      introPrunes,
      {
        y: -1000,
        opacity: 0,
      },
      "-=0.2"
    )
    .from(
      introCherry,
      {
        y: -800,
        opacity: 0,
      },
      "-=0.2"
    )
    .to(introHollowCircle, {
      duration: 4,
      rotate: 360,
      ease: "power3.out",
    })
    .to(introFruits, {
      onComplete: () => {
        introFruits.forEach((el) => {
          el.classList.add("active");
        });
      },
    });

  const introSliderHeader = document.querySelector(
    ".intro-slider__first-header"
  );
  const introLeftLine = document.querySelector(".intro-slider .left-line");
  const introRightLine = document.querySelector(".intro-slider .right-line");

  gsap.fromTo(
    introSliderHeader,
    {
      x: -500,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    },
    "2"
  );
  gsap.to(introSliderHeader, {
    scrollTrigger: {
      trigger: introBlock,
      start: "top top",
      end: "bottom+=300 center",
      scrub: true,
    },
    y: "100%",
  });
  gsap.to(introLeftLine, {
    scrollTrigger: {
      trigger: introBlock,
      start: "top top",
      end: "bottom-=200 center",
      scrub: true,
    },
    opacity: 0,
  });

  gsap.fromTo(
    introLeftLine,
    {
      width: "0rem",
    },
    {
      width: "53rem",
      duration: 1,
    },
    "1"
  );
  gsap.fromTo(
    introRightLine,
    {
      width: "0rem",
    },
    {
      width: "63.6rem",
      duration: 1,
    },
    "1"
  );
}

// animate fruits and berries

const animFruits = document.querySelectorAll(".anim-fruit__wrapper");

if (animFruits.length > 0 && window.innerWidth > 500) {
  function animateFrom(elem, direction) {
    direction = direction || 1;

    switch (direction) {
      case -1:
        elem.classList.add("from-bottom");
        elem.classList.remove("from-top");
        break;
      case 1:
        elem.classList.add("from-bottom");
        elem.classList.remove("from-top");
        break;
      case 2:
        elem.classList.remove("from-bottom");
        elem.classList.add("from-top");
        break;
      case 3:
        elem.classList.remove("from-bottom");
        elem.classList.remove("from-top");
        break;

      default:
        break;
    }
  }

  const gsapMM = gsap.matchMedia();

  gsapMM.add("(min-width: 921px)", () => {
    animFruits.forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        end: "top-=300 top",
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          animateFrom(elem, 2);
        },
        onLeaveBack: () => {
          animateFrom(elem, 3);
        },
      });
    });
  });
}

const benefitsItems = document.querySelectorAll(".benefits-main__item");

if (benefitsItems.length) {
  benefitsItems.forEach((item, i) => {
    let direction = i % 2 === 0 ? -1 : 1;

    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: 100 * direction,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "top bottom+=200",
          end: "center-=100 center",
          scrub: true,
        },
      }
    );
  });
}

const sectionTitles = document.querySelectorAll(".section-title");

if (sectionTitles.length && window.innerWidth > 500) {
  sectionTitles.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: -400,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "top bottom+=200",
          end: "center-=100 center",
          scrub: true,
        },
      }
    );
  });
}

const history = document.querySelectorAll(".history ");
const historyItems = document.querySelectorAll(".history-item");

if (history && window.innerWidth > 500) {
  gsap.fromTo(
    historyItems,
    {
      opacity: 0,
      y: 300,
    },
    {
      opacity: 1,
      y: 0,

      stagger: 0.5,

      scrollTrigger: {
        trigger: history,
        start: "top bottom-=200",
        end: "center center",
        scrub: true,
      },
    }
  );
}

const aboutInfo = document.querySelectorAll(".about-info");
const aboutInfoItem = document.querySelectorAll(".about-info__item");

if (aboutInfo && window.innerWidth > 500) {
  gsap.fromTo(
    aboutInfoItem,
    {
      opacity: 0,
      y: 300,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,

      scrollTrigger: {
        trigger: aboutInfo,
        start: "top bottom-=200",
        end: "center center",
        scrub: true,
      },
    }
  );
}

const productBlock = document.querySelector(".product");
const productFruits = document.querySelectorAll(".product .anim-fruit");
const productAlmond = document.querySelector(".product .is-almond__wrapper");
const productPrunes = document.querySelector(".product .is-prunes__wrapper");
const productCherry = document.querySelector(".product .is-cherry__wrapper");
const productHollowCircle = document.querySelector(
  ".product .product-img__blur-circle"
);
const productFilledCircle = document.querySelector(
  ".product .blur-circle-inner"
);
const productImg = document.querySelector(".product .product-img");

if (productBlock && window.innerWidth > 500) {
  const productTl = gsap.timeline();

  productTl
    .fromTo(
      productHollowCircle,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.6,
      }
    )
    .fromTo(
      productFilledCircle,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.6,
      }
    )
    .fromTo(
      productImg,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
      }
    )
    .from(productAlmond, {
      y: -300,
      opacity: 0,
    })
    .from(
      productPrunes,
      {
        y: -1000,
        opacity: 0,
      },
      "-=0.2"
    )
    .from(
      productCherry,
      {
        y: -800,
        opacity: 0,
      },
      "-=0.2"
    )
    .to(productHollowCircle, {
      duration: 4,
      rotate: 360,
      ease: "power3.out",
    })
    .to(productFruits, {
      onComplete: () => {
        productFruits.forEach((el) => {
          el.classList.add("active");
        });
      },
    });
}
