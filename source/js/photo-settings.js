const initPhotoSettings = (photoSettingsElement) => {
  const navigationElement = photoSettingsElement.querySelector('.photo-settings__navigation');
  const navigtionLinkElements = photoSettingsElement.querySelectorAll('.photo-settings__navigation-link');
  const navigationItemElements = photoSettingsElement.querySelectorAll('.photo-settings__item');

  let currentNavigationItemIndex = 0;

  const switchCurrentNavigationItem = (newIndex) => {
    navigtionLinkElements[currentNavigationItemIndex].classList.remove('photo-settings__navigation-link--current');
    navigationItemElements[currentNavigationItemIndex].classList.remove('photo-settings__item--current');

    navigtionLinkElements[newIndex].classList.add('photo-settings__navigation-link--current');
    navigationItemElements[newIndex].classList.add('photo-settings__item--current');

    currentNavigationItemIndex = newIndex;
  };

  switchCurrentNavigationItem(currentNavigationItemIndex);

  navigtionLinkElements.forEach((navigationLinkElement, index) => {
    navigationLinkElement.dataset.index = index;
  });

  navigationElement.addEventListener('click', (evt) => {
    const navigationLinkElement = evt.target.closest('.photo-settings__navigation-link');

    if (!navigationLinkElement) {
      return;
    }

    evt.preventDefault();
    switchCurrentNavigationItem(navigationLinkElement.dataset.index);
  });
};

export { initPhotoSettings };
