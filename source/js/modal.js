import { isEscEvent } from './util.js';

let openedModal = null;

function closeModal() {
  openedModal.classList.remove('modal--open');
  document.removeEventListener('keydown', onModalEscEvent);
  openedModal = null;
}

function onModalEscEvent(evt) {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const openModal = (modal) => {
  modal.classList.add('modal--open');
  document.addEventListener('keydown', onModalEscEvent);
  openedModal = modal;
};

const initModal = (modal) => {
  const modalCloseButton = modal.querySelector('.modal__close');

  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', ({target}) => {
    if (target === modal) {
      closeModal();
    }
  });
};

export {
  initModal,
  openModal,
  closeModal
};
