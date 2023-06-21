const LIKE_BUTTON_ACTIVE_CLASS = 'button-image--active';

const initPosts = (postsElement) => {
  postsElement.addEventListener('click', (evt) => {
    const likeButtonElement = evt.target.closest('.post-rating__button');

    if (!likeButtonElement) {
      return;
    }

    likeButtonElement.classList.toggle(LIKE_BUTTON_ACTIVE_CLASS);
    const likesCounterElement = likeButtonElement
      .closest('.post__rating')
      .querySelector('.post-rating__counter');
    const increase = likeButtonElement.classList.contains(LIKE_BUTTON_ACTIVE_CLASS) ? 1 : -1;
    likesCounterElement.textContent = Number(likesCounterElement.textContent) + increase;
  });
};

export { initPosts };
