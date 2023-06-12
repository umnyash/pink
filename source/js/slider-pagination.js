const getSliderPaginationButtonCreator = (slideName = 'Слайд') => (index, className) => `
  <button class='${className}' type='button'>
    <span class='visually-hidden'>${slideName} ${index + 1}.</span>
  </button>
`;

const getSliderPaginationCurrentButtonDisabler = (buttons) => () => {
  for (const button of buttons) {
    button.disabled = button.classList.contains('slider-pagination__button--current');
  }
};

export { getSliderPaginationButtonCreator, getSliderPaginationCurrentButtonDisabler };
