import { isEscapeKey } from './util.js';
import { scaleImageReset, scaleDefault, scaleValueControl, scaleBigger, scaleSmaller, buttonBigger, buttonSmaller } from './scale.js';
import { imageUploadForm, hashtagInput, commentInput, pristine } from './validation.js';
import { effectChange, effectReset } from './renderImageEffect.js';

export const uploadPhotoSection = document.querySelector('.img-upload__overlay');
const imageUpload = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');

const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeImageRedactor();
  }
};


const inputInFocus = () => {
  imageUpload.removeEventListener('keydown', onDocKeydown);
};

const inputOutFocus = () => {
  imageUpload.addEventListener('keydown', onDocKeydown);
};

const addInputListener = () => {
  hashtagInput.addEventListener('focus', inputInFocus);
  commentInput.addEventListener('focus', inputInFocus);
  hashtagInput.addEventListener('blur', inputOutFocus);
  commentInput.addEventListener('blur', inputOutFocus);
};

const removeInputListener = () => {
  hashtagInput.removeEventListener('focus', inputInFocus);
  commentInput.removeEventListener('focus', inputInFocus);
  hashtagInput.removeEventListener('blur', inputOutFocus);
  commentInput.removeEventListener('blur', inputOutFocus);
};

export function closeImageRedactor() {
  uploadPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageUploadForm.reset();
  pristine.reset();
  scaleImageReset();
  effectReset();
  removeInputListener();

  scaleSmaller.removeEventListener('click', buttonSmaller);
  scaleBigger.removeEventListener('click', buttonBigger);
  cancelButton.removeEventListener('click', closeImageRedactor);
  imageUploadForm.removeEventListener('change', effectChange);
  imageUploadForm.removeEventListener('keydown', onDocKeydown);
}

function openImageRedactor() {
  uploadPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');
  scaleValueControl.value = `${scaleDefault}%`;
  addInputListener();

  scaleSmaller.addEventListener('click', buttonSmaller);
  scaleBigger.addEventListener('click', buttonBigger);
  cancelButton.addEventListener('click', closeImageRedactor);
  imageUploadForm.addEventListener('change', effectChange);
  imageUploadForm.addEventListener('keydown', onDocKeydown);
}

imageUpload.addEventListener('change', openImageRedactor);
