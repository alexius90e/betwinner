const headerEl = document.querySelector('.header');

if (headerEl) {
  headerEl.addEventListener('click', (event) => {
    const isBurgerButton = event.target.classList.contains('header__burger-button');
    const isCloseButton = event.target.classList.contains('header__close-button');
    const headerNavEl = event.currentTarget.querySelector('.header__nav');

    if (headerEl) {
      if (isBurgerButton) {
        headerNavEl.classList.add('active');
      }

      if (isCloseButton) {
        headerNavEl.classList.remove('active');
      }
    }
  });
}

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

const reviewsEl = document.querySelector('.reviews');

if (reviewsEl) {
  reviewsEl.addEventListener('click', (event) => {
    const isMoreButton = event.target.classList.contains('reviews__more-button');

    if (isMoreButton) {
      const reviewsHiddenEl = event.currentTarget.querySelector('.reviews__hidden');
      const isActive = event.target.classList.contains('active');

      if (reviewsHiddenEl) {
        if (isActive) {
          reviewsHiddenEl.classList.remove('active');
          event.target.classList.remove('active');
          event.target.textContent = 'Показать еще';
          event.currentTarget.scrollIntoView({ behavior: 'smooth' });
        } else {
          reviewsHiddenEl.classList.add('active');
          event.target.classList.add('active');
          event.target.textContent = 'Скрыть';
        }
      }
    }
  });
}
