const setSliderMode = (table) => {
  table.itself.classList.add(table.modeClass, 'swiper');
  table.body.classList.add('swiper-wrapper');
  table.rows.forEach((row) => row.classList.add('swiper-slide'));

  table.swiper = new Swiper(table.itself, { // eslint-disable-line
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: table.columnGap,
    initialSlide: table.initialSlide,
    pagination: {
      el: table.pagination,
      bulletClass: 'slider-pagination__button',
      bulletActiveClass: 'slider-pagination__button--current',
      renderBullet: table.paginationButtonCreator,
      clickable: true
    },
    on: {
      init: table.paginationCurrentButtonDisabler,
      slideChange: table.paginationCurrentButtonDisabler
    }
  });
};

const resetSliderMode = (table) => {
  table.itself.classList.remove(table.modeClass, 'swiper');
  table.body.classList.remove('swiper-wrapper');
  table.rows.forEach((row) => row.classList.remove('swiper-slide'));

  table.swiper.destroy(true, true);
  table.swiper = null;
};

const toggleTableMode = (table) => {
  if (table.swiper) {
    resetSliderMode(table);
  } else {
    setSliderMode(table);
  }
};

const initSliderTable = (tableElement, getPaginationButtonCreator, getPaginationCurrentButtonDisabler) => {
  const pagination = tableElement.querySelector('.slider-pagination');

  const table = {
    itself: tableElement,
    body: tableElement.querySelector('.slider-table__body'),
    rows: tableElement.querySelectorAll('.slider-table__row'),
    pagination,
    paginationButtonCreator: getPaginationButtonCreator(tableElement.dataset.slideName),
    paginationCurrentButtonDisabler: getPaginationCurrentButtonDisabler(pagination.children),
    modeClass: `${tableElement.dataset.tableClass}--slider`,
    columnGap: tableElement.dataset.columnGap,
    initialSlide: tableElement.dataset.initialSlide
  };

  const sliderBreakpointMediaQuery = window.matchMedia(`(max-width: ${tableElement.dataset.sliderBreakpoint}px)`);

  if (sliderBreakpointMediaQuery.matches) {
    setSliderMode(table);
  }

  sliderBreakpointMediaQuery.addEventListener('change', () => {
    toggleTableMode(table);
  });
};

export { initSliderTable };
