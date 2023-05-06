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

      markers: { startColor: "green", endColor: "red", fontSize: "12px" },
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
