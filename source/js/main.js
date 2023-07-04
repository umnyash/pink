import { initMainNavigation } from './main-navigation.js';
import { initReviewsSlider } from './reviews-slider.js';
import { initSliderTable } from './slider-table.js';
import { initPosts } from './posts.js';
import { initPhotoSettings } from './photo-settings.js';
import { initPostingForm } from './posting-form.js';
import { initContestForm } from './contest-form.js';
import { getSliderPaginationButtonCreator, getSliderPaginationCurrentButtonDisabler } from './slider-pagination.js';
import { initContactsMap } from './contacts-map.js';
import { initModal, openModal, closeModal } from './modal.js';
import { initAlert, changeAlertText } from './alert.js';
import { sendData } from './api.js';
import { enableButtonPendingState, disableButtonPendingState } from './button.js';

// Инициализация бургерного меню.
document.querySelectorAll('.main-header__navigation').forEach(initMainNavigation);

// Инициализация слайдера отзывов
document.querySelectorAll('.reviews__slider').forEach((slider) => initReviewsSlider(
  slider,
  getSliderPaginationButtonCreator,
  getSliderPaginationCurrentButtonDisabler
));

// Инициализация слайдера-таблицы
document.querySelectorAll('.slider-table').forEach((table) => initSliderTable(
  table,
  getSliderPaginationButtonCreator,
  getSliderPaginationCurrentButtonDisabler
));

// Инициализация интерактивной карты
document.querySelectorAll('#office-location-map').forEach(initContactsMap);

// Инициализация лайков в списке постов
document.querySelectorAll('.posts').forEach(initPosts);

// Инициализация вкладок с настройками фотографии
document.querySelectorAll('.photo-settings').forEach(initPhotoSettings);

// Инициализация отображения загружаемой фотогрфафии и её настроек
document.querySelectorAll('.posting-form').forEach(initPostingForm);

// Поиск модального окна для оповещений и оповещения внутри него
const alertModalElement = document.querySelector('[data-modal="alert"]');
const alertElement = alertModalElement?.querySelector('.alert');

// Инициализация закрытия модального окна кнопкой вложенного блока alert
if (alertElement) {
  initAlert(alertElement, closeModal);
}

// Валидация формы и инициализация показа оповещения при отправке или попытке отправки формы
document.querySelectorAll('.contest-form').forEach((contestForm) => {
  initContestForm(contestForm, sendData, enableButtonPendingState, disableButtonPendingState, alertModalElement, openModal, alertElement, changeAlertText);
});

// Инициализация способов закрытия модального окна
document.querySelectorAll('.modal').forEach(initModal);
