const ANIMATION_DURATION = 300;

const initMainNavigation = (navigationElement) => {
  navigationElement.classList.add('main-header__navigation--js');

  const toggleButtonElement = navigationElement.querySelector('.main-header__burger');
  const menuElement = navigationElement.querySelector('.main-header__main-menu');

  toggleButtonElement.addEventListener('click', () => {
    toggleButtonElement.classList.remove('burger--animated');

    setTimeout(() => {
      toggleButtonElement.classList.toggle('burger--close');
      toggleButtonElement.classList.add('burger--animated');
    }, 1);

    if (navigationElement.classList.contains('main-header__navigation--open')) {
      setTimeout(() => menuElement.classList.remove('main-header__main-menu--animated'), ANIMATION_DURATION);
    } else {
      menuElement.classList.add('main-header__main-menu--animated');
    }

    navigationElement.classList.toggle('main-header__navigation--open');

  });
};

export { initMainNavigation };
