import { isEscEvent } from './util.js';

let openedModal = null;

function closeModal() {
  openedModal.classList.remove('modal--open');
  document.removeEventListener('keydown', onModalEcsEvent);
  openedModal = null;
}

function onModalEcsEvent(evt) {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const openModal = (modal) => {
  modal.classList.add('modal--open');
  document.addEventListener('keydown', onModalEcsEvent);
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
