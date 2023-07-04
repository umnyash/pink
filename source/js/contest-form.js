const VALIDATION_ERROR_ALERT_TEXT = {
  heading: 'Что-то пошло не&nbsp;так!',
  text: 'Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить',
  buttonText: 'Ок'
};

const SENDING_ERROR_ALERT_TEXT = {
  heading: 'Не удалось<br> отправить заявку!',
  text: 'Проверьте подключение к интернету',
  buttonText: 'Ок'
};

const SUCCESS_ALERT_TEXT = {
  heading: 'Ваша заявка отправлена',
  text: 'Спасибо за ваше участие, ваша заявка уже поступила к нам. В ближайшее время мы рассмотрим её и оповестим вас.',
  buttonText: 'Закрыть окно'
};

const submitButtonPendingStateClass = 'button--pending';

const initContestForm = (formElement, sendData, enableButtonPendingState, disableButtonPendingState, alertModalElement, openModal, alertElement, changeAlertContent) => {
  const actionUrl = formElement.getAttribute('action');

  const submitButtonElement = formElement.querySelector('.contest-form__submit-button');

  const pristine = new Pristine(formElement, {
    classTo: 'textfield',
    errorClass: 'textfield--invalid',
    errorTextParent: 'textfield',
    errorTextTag: 'p',
    errorTextClass: 'textfield__prompt'
  });

  const alertIsOk = alertModalElement && openModal && alertElement && changeAlertContent;

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      enableButtonPendingState(submitButtonElement, submitButtonPendingStateClass);

      sendData(
        actionUrl,
        new FormData(evt.target),
        () => {
          formElement.reset();

          if (alertIsOk) {
            changeAlertContent(alertElement, SUCCESS_ALERT_TEXT, true);
            openModal(alertModalElement);
          }

          disableButtonPendingState(submitButtonElement, submitButtonPendingStateClass);
        },
        () => {
          if (alertIsOk) {
            changeAlertContent(alertElement, SENDING_ERROR_ALERT_TEXT, false);
            openModal(alertModalElement);
          }

          disableButtonPendingState(submitButtonElement, submitButtonPendingStateClass);
        }
      );
    } else if (alertIsOk) {
      changeAlertContent(alertElement, VALIDATION_ERROR_ALERT_TEXT, false);
      openModal(alertModalElement);
    }
  });
};

export { initContestForm };
