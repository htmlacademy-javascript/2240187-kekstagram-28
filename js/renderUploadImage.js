import { isEscapeKey } from './util.js';
import { scaleImageReset, buttonBigger, buttonSmaller } from './scale.js';
import { pristine } from './validation.js';
import { effectChange, effectReset } from './renderImageEffect.js';

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
const scaleDefault = 100;

const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeImageEditor();
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

export function closeImageEditor() {
  uploadPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageUploadForm.reset();
  pristine.reset();
  scaleImageReset();
  effectReset();
  removeInputListener();

  scaleSmaller.removeEventListener('click', buttonSmaller);
  scaleBigger.removeEventListener('click', buttonBigger);
  cancelButton.removeEventListener('click', closeImageEditor);
  imageUploadForm.removeEventListener('change', effectChange);
  imageUploadForm.removeEventListener('keydown', onDocKeydown);
}

function openImageEditor() {
  const imageUrl = imageUploadButton.files[0];
  //console.log(image);
  imagePreview.src = URL.createObjectURL(imageUrl);

  uploadPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');
  scaleValueControl.value = `${scaleDefault}%`;
  addInputListener();

  scaleSmaller.addEventListener('click', buttonSmaller);
  scaleBigger.addEventListener('click', buttonBigger);
  cancelButton.addEventListener('click', closeImageEditor);
  imageUploadForm.addEventListener('change', effectChange);
  imageUploadForm.addEventListener('keydown', onDocKeydown);
}

const renderUploadImage = () => {
  imageUpload.addEventListener('change', openImageEditor);
};

export {renderUploadImage};
