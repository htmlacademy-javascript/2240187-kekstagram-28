

import { isEscapeKey } from './util.js';
import { scaleImageReset, increaseSize, decreaseSize } from './scale.js';
import { resetValidation } from './validation.js';
import { effectChange, effectReset } from './renderImageEffect.js';

const SCALE_DEFAULT = 100;
const imagePreview = document.querySelector('.img-upload__preview img');
const imageUploadForm = document.querySelector('.img-upload__form');
const hashtagInput = imageUploadForm.querySelector('.text__hashtags');
const commentInput = imageUploadForm.querySelector('.text__description');
const uploadPhotoSection = document.querySelector('.img-upload__overlay');
const imageUpload = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const imageUploadButton = document.querySelector('.img-upload__input');
const scaleValueControl = document.querySelector('.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');


const inputInFocus = () => {
  imageUploadForm.removeEventListener('keydown', onDocKeydown);
};

const inputOutFocus = () => {
  imageUploadForm.addEventListener('keydown', onDocKeydown);
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

export const closeImageEditor = () => {
  uploadPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageUploadForm.reset();
  resetValidation();
  scaleImageReset();
  effectReset();
  removeInputListener();

  scaleSmaller.removeEventListener('click', decreaseSize);
  scaleBigger.removeEventListener('click', increaseSize);
  cancelButton.removeEventListener('click', closeImageEditor);
  imageUploadForm.removeEventListener('change', effectChange);
  imageUploadForm.removeEventListener('keydown', onDocKeydown);
};

const openImageEditor = () => {
  const imageUrl = imageUploadButton.files[0];
  imagePreview.src = URL.createObjectURL(imageUrl);

  uploadPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');
  scaleValueControl.value = `${SCALE_DEFAULT}%`;
  addInputListener();

  scaleSmaller.addEventListener('click', decreaseSize);
  scaleBigger.addEventListener('click', increaseSize);
  cancelButton.addEventListener('click', closeImageEditor);
  imageUploadForm.addEventListener('change', effectChange);
  imageUploadForm.addEventListener('keydown', onDocKeydown);
};

function onDocKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeImageEditor();
  }
}

const renderUploadImage = () => {
  imageUpload.addEventListener('change', openImageEditor);
};

export { renderUploadImage };
