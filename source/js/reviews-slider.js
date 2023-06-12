const initReviewsSlider = (sliderElement, getPaginationButtonCreator, getPaginationCurrentButtonDisabler) => {
  const pagination = sliderElement.querySelector('.slider-pagination');
  const paginationCurrentButtonDisabler = getPaginationCurrentButtonDisabler(pagination.children);

  new Swiper(sliderElement, { // eslint-disable-line
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: '.slider-navigation__button--prev',
      nextEl: '.slider-navigation__button--next',
      disabledClass: 'slider-navigation__button--disabled'
    },
    pagination: {
      el: pagination,
      bulletClass: 'slider-pagination__button',
      bulletActiveClass: 'slider-pagination__button--current',
      renderBullet: getPaginationButtonCreator(sliderElement.dataset.slideName),
      clickable: true
    },
    breakpoints: {
      1000: {
        spaceBetween: 100
      }
    },
    on: {
      init: paginationCurrentButtonDisabler,
      slideChange: paginationCurrentButtonDisabler
    }
  });
};

export { initReviewsSlider };
