function afectCircle() {
  const circle1 = document.querySelector(".section-1__circle");

  const exclamationPoint = document.getElementById("section-3_!");
  setTimeout(() => {
    circle1.classList.add("section-1__circle-afect");
  }, 300);
  setInterval(() => {
    circle1.classList.toggle("section-1__circle-afect");
  }, 4700);
  setInterval(() => {
    if (exclamationPoint.textContent === "") {
      exclamationPoint.textContent = "!";
    } else {
      exclamationPoint.textContent = "";
    }
  }, 700);
}

afectCircle();

// function section() {
//   const main = document.querySelector(".main");
//   const html = `

//   `;
//   main.innerHTML = html;
// }

// section();

new Swiper(".swiper", {
  clickable: false,
  allowTouchMove: false,
  freeMode: true,
  slidesPerView: 4,
  autoplay: {
    delay: 500,
    loop: true,
    disableOnInteraction: false,
  },
  effect: "slide",
  speed: 4000,
});

function clickSwiper() {
  const containerSwiper = document.querySelector(".swiper");
  containerSwiper.addEventListener("click", () => {
    setTimeout(() => {
      new Swiper(".swiper", {
        clickable: false,
        allowTouchMove: false,
        freeMode: true,
        slidesPerView: 4,
        autoplay: {
          delay: 500,
          loop: true,
          disableOnInteraction: false,
        },
        effect: "slide",
        speed: 4000,
      });
    }, 0.1);
  });
}

clickSwiper();

const swiper2 = document.querySelector(".mobile-section-2 > .swiper");

new Swiper(swiper2, {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const mobileFooterImg1 = document.querySelector(".mobile-footer__img-1");
const mobileFooterImg2 = document.querySelector(".mobile-footer__img-2");
mobileFooterImg1.addEventListener("click", () => {
  location.reload();
});
mobileFooterImg2.addEventListener("click", () => {
  form.classList.toggle("mobile-form__active");
  mobileFooterImg2.classList.toggle("mobile-footer__img-2__active");
});
