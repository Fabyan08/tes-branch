const rem = 16; // 1rem is 16px

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: rem * 2,
  mousewheel: false,
  // allowTouchMove: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: false,
//   slidesPerView: '1',
//   spaceBetween: 32,

//   // Navigation arrows
//   navigation: {
//     prevEl: '.swiper-prev',
//     nextEl: '.swiper-next',
//   },

//   freeMode: false, // при перетаскивании превью ведет себя как при скролле
//   mousewheel: false,
//   allowTouchMove: false,

// });
