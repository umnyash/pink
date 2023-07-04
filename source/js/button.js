const enableButtonPendingState = (buttonElement, pendingStateClass) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(pendingStateClass);
};

const disableButtonPendingState = (buttonElement, pendingStateClass) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(pendingStateClass);
};

export { enableButtonPendingState, disableButtonPendingState };
