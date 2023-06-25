const IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg', 'webp', 'gif'];

const checkMinWidth = (width) => window.matchMedia(`(min-width: ${width}px)`).matches;

const isImage = (file) => {
  const fileName = file.name.toLowerCase();

  return IMAGE_FILE_TYPES.some((type) => fileName.endsWith(type));
};

const setOnWindowResizeWidth = (cb) => {
  let windowWidth = document.documentElement.clientWidth;

  window.addEventListener('resize', () => {
    if (windowWidth === document.documentElement.clientWidth) {
      return;
    }

    cb();
    windowWidth = document.documentElement.clientWidth;
  });
};

export {
  checkMinWidth,
  isImage,
  setOnWindowResizeWidth
};
