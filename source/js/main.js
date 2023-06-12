import { initMainNavigation } from './main-navigation.js';
import { initReviewsSlider } from './reviews-slider.js';
import { initSliderTable } from './slider-table.js';
import {
  getSliderPaginationButtonCreator,
  getSliderPaginationCurrentButtonDisabler
} from './slider-pagination.js';

document.querySelectorAll('.main-header__navigation').forEach(initMainNavigation);

document.querySelectorAll('.reviews__slider').forEach((slider) => initReviewsSlider(
  slider,
  getSliderPaginationButtonCreator,
  getSliderPaginationCurrentButtonDisabler
));

document.querySelectorAll('.slider-table').forEach((table) => initSliderTable(
  table,
  getSliderPaginationButtonCreator,
  getSliderPaginationCurrentButtonDisabler
));
