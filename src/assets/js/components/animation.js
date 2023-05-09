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
const introAlmond = document.querySelector(".is-almond");
const introPrunes = document.querySelector(".is-prunes");
const introCherry = document.querySelector(".is-cherry");
const introHollowCircle = document.querySelector(".hollow-circle");
const introFilledCircle = document.querySelector(".filled-circle");
const introImg = document.querySelector(".is-slide__main-img");

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
      console.log(this);
      introFruits.forEach((el) => {
        el.classList.add("active");
      });
    },
  });

const introSliderHeader = document.querySelector(".intro-slider__first-header");
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
