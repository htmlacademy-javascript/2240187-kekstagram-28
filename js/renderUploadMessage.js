
import { isEscapeKey } from './util.js';
import { closeImageEditor} from './renderUploadImage.js';

const uploadMessageContainer = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadPhotoSection = document.querySelector('.img-upload__overlay');


const closeSuccessWindow = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('click', onOutOfTheBoxClick);
  uploadMessageContainer.removeEventListener('keydown', onDocKeydown);
  closeImageEditor();
};

const closeErrorWindow = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('click', onOutOfTheBoxClick);
  uploadMessageContainer.removeEventListener('keydown', onDocKeydown);
};

function onDocKeydown (evt) {
  const successWindow = document.querySelector('.success');
  const errorWindow = document.querySelector('.error');
  if (isEscapeKey(evt)) {
    if (successWindow !== null) {
      closeSuccessWindow();
    } else if (errorWindow !== null) {
      closeErrorWindow();
    }
  }
}

const renderSuccessMessage = () => {
  const successWindow = successTemplate.cloneNode(true);
  const successButton = successWindow.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccessWindow);
  uploadMessageContainer.append(successWindow);
  uploadMessageContainer.addEventListener('keydown', onDocKeydown);
  uploadPhotoSection.classList.add('modal-open');
  document.addEventListener('click', onOutOfTheBoxClick);
};

const renderErrorMessage = () => {
  const errorWindow = errorTemplate.cloneNode(true);
  const errorButton = errorWindow.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorWindow);
  uploadMessageContainer.append(errorWindow);
  uploadMessageContainer.addEventListener('keydown', onDocKeydown);
  uploadPhotoSection.classList.add('modal-open');
  document.addEventListener('click', onOutOfTheBoxClick);
};

function onOutOfTheBoxClick(evt) {
  const successWindow = document.querySelector('.success');
  const errorWindow = document.querySelector('.error');
  if (evt.target === successWindow) {
    closeSuccessWindow();
  } else if (evt.target === errorWindow) {
    closeErrorWindow();
  }
}

export { renderSuccessMessage, renderErrorMessage };
