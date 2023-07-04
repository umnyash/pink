const initAlert = (alertElement, closeModal) => {
  const closeButtonElement = alertElement.querySelector('.alert__button');
  const modal = alertElement.closest('.modal');

  if (closeButtonElement && modal) {
    closeButtonElement.addEventListener('click', closeModal);
  }
};

const changeAlertText = (alertElement, {heading, text, buttonText}, isSuccess) => {
  alertElement.classList.toggle('alert--success', isSuccess);
  alertElement.querySelector('.alert__heading').innerHTML = heading;
  alertElement.querySelector('.alert__text').innerHTML = text;
  alertElement.querySelector('.alert__button').innerHTML = buttonText;
};

export {
  initAlert,
  changeAlertText
};
