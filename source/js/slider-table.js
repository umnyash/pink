import { checkMinWidth, setOnWindowResizeWidth } from './util.js';

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
  if (checkMinWidth(table.breakpoint)) {
    if (!table.swiper) {
      return;
    }

    resetSliderMode(table);
  } else {
    if (table.swiper) {
      return;
    }

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
    breakpoint: tableElement.dataset.sliderBreakpoint,
    columnGap: tableElement.dataset.columnGap,
    initialSlide: tableElement.dataset.initialSlide
  };

  toggleTableMode(table);
  setOnWindowResizeWidth(() => toggleTableMode(table));
};

export { initSliderTable };
