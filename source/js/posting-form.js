import { isImage } from './util.js';

const switchPostingFormPhoto = (postingFormPhotoFieldElement, postingFormPhotoElement) => {
  const file = postingFormPhotoFieldElement.files[0];

  if (file && isImage(file)) {
    postingFormPhotoElement.classList.remove('posting-form__photo--hidden');
    postingFormPhotoElement.src = URL.createObjectURL(file);
  } else {
    postingFormPhotoFieldElement.value = '';
    postingFormPhotoElement.src = '';
  }
};

const onPostingFormPhotoElementError = (postingFormPhotoElement) => {
  postingFormPhotoElement.classList.add('posting-form__photo--hidden');
};

const changePostingFormPhotoFillLevel = (postingFormPhotoUploadElement, value) => {
  postingFormPhotoUploadElement.style.setProperty('--fill-level', value);
};

const changePostingFormPhotoContrastLevel = (postingFormPhotoElement, value) => {
  postingFormPhotoElement.style.setProperty('--contrast-level', value);
};

const initPostingForm = (postingFormElement) => {
  const postingFormPhotoUploadElement = postingFormElement.querySelector('.posting-form__photo-upload');
  const postingFormPhotoFieldElement = postingFormPhotoUploadElement.querySelector('.posting-form__photo-field-control');
  const postingFormPhotoElement = postingFormPhotoUploadElement.querySelector('.posting-form__photo');
  const fillControlElement = postingFormElement.querySelector('.range--with-icon_fill .range__control');
  const contrastControlElement = postingFormElement.querySelector('.range--with-icon_contrast .range__control');

  postingFormPhotoElement.addEventListener('error', () => {
    onPostingFormPhotoElementError(postingFormPhotoElement);
  });

  postingFormElement.addEventListener('input', ({target}) => {
    switch(target) {
      case fillControlElement:
        changePostingFormPhotoFillLevel(postingFormPhotoUploadElement, fillControlElement.value);
        return;
      case contrastControlElement:
        changePostingFormPhotoContrastLevel(postingFormPhotoElement, contrastControlElement.value);
        return;
      case postingFormPhotoFieldElement:
        switchPostingFormPhoto(postingFormPhotoFieldElement, postingFormPhotoElement);
    }
  });

  postingFormElement.addEventListener('reset', () => {
    setTimeout(() => {
      changePostingFormPhotoFillLevel(postingFormPhotoUploadElement, fillControlElement.value);
      changePostingFormPhotoContrastLevel(postingFormPhotoElement, contrastControlElement.value);
      switchPostingFormPhoto(postingFormPhotoFieldElement, postingFormPhotoElement);
    }, 0);
  });
};

export { initPostingForm };
