const checkMinWidth = (width) => window.matchMedia(`(min-width: ${width}px)`).matches;

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
  setOnWindowResizeWidth
};
