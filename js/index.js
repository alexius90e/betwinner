const installSwiperEl = document.querySelector('.install__slider .swiper');

if (installSwiperEl) {
  const installSwiper = new Swiper(installSwiperEl, {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },
      577: {
        slidesPerView: 1.5,
      },
      769: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 3,
      },
      1401: {
        slidesPerView: 4,
      },
    },
  });
}
