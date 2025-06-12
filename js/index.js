const installSwiperEl = document.querySelector('.install__slider .swiper');

if (installSwiperEl) {
  const installSwiper = new Swiper(installSwiperEl, {
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
}


const promocodesSwiperEl = document.querySelector('.promocodes__slider .swiper');

if (promocodesSwiperEl) {
  const promocodesSwiper = new Swiper(promocodesSwiperEl, {
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
}

