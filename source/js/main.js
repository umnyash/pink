import { initMainNavigation } from './main-navigation.js';
import { initReviewsSlider } from './reviews-slider.js';
import { initSliderTable } from './slider-table.js';
import { initPosts } from './posts.js';
import { initPhotoSettings } from './photo-settings.js';
import { initPostingForm } from './posting-form.js';

import {
  getSliderPaginationButtonCreator,
  getSliderPaginationCurrentButtonDisabler
} from './slider-pagination.js';

import { initContactsMap } from './contacts-map.js';

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

document.querySelectorAll('#office-location-map').forEach(initContactsMap);

document.querySelectorAll('.posts').forEach(initPosts);

document.querySelectorAll('.photo-settings').forEach(initPhotoSettings);

document.querySelectorAll('.posting-form').forEach(initPostingForm);
