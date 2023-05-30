const initMainNavigation = (navigationElement) => {
  navigationElement.classList.remove('main-header__navigation--no-js');

  const toggleButtonElement = navigationElement.querySelector('.main-header__burger');

  toggleButtonElement.addEventListener('click', () => {
    toggleButtonElement.classList.remove('burger--animated');

    toggleButtonElement.classList.toggle('burger--close');
    navigationElement.classList.toggle('main-header__navigation--open');

    setTimeout(() => toggleButtonElement.classList.add('burger--animated'), 0);
  });
};

export { initMainNavigation };
