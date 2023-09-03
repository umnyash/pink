const IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg', 'webp', 'gif'];

const Keys = Object.freeze({
  ESCAPE: 'Escape',
  ESC: 'Esc',
});

const isImage = (file) => {
  const fileName = file.name.toLowerCase();

  return IMAGE_FILE_TYPES.some((type) => fileName.endsWith(type));
};

const isEscEvent = (evt) => evt.key === Keys.ESCAPE || evt.key === Keys.ESC;

export {
  isImage,
  isEscEvent
};
