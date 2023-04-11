const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const showAlert = (message) => {
  const alertContainer = document.querySelector('.show__alert');
  alertContainer.classList.remove('hidden');
  alertContainer.textContent = message;

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export { isEscapeKey, isEnterKey, showAlert };

