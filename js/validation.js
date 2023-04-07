import { sendData } from './api.js';
import { renderSuccessMessage, renderErrorMessage } from './renderUploadMessage.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const hashtagInput = imageUploadForm.querySelector('.text__hashtags');
const commentInput = imageUploadForm.querySelector('.text__description');
const uploadForm = document.querySelector('#upload-select-image');
const uploadSubmitButton = uploadForm.querySelector('#upload-submit');
const maxHashtagCount = 5;
const maxCommentCharacters = 140;
const submitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error',
});

function validateHashtag(hashtagString) {
  if (hashtagString === '') {
    return true;
  }
  const hashtagRegexp = /^#[a-zа-яё0-9]{1,19}$/i;
  const hashtagStringArray = hashtagString.trim().split(' ');
  for (let i = 0; i < hashtagStringArray.length; i++) {
    const hashtag = hashtagStringArray[i];
    if (!hashtagRegexp.test(hashtag)) {
      return false;
    }
  }
  return true;
}

function validateHashtagCount(hashtagString) {
  const hashtagStringArray = hashtagString.trim().split(' ');
  if (hashtagStringArray.length > maxHashtagCount) {
    return false;
  }
  return true;
}

function validateUniqueHashtag(hashtagString) {
  const hashtagStringArray = hashtagString.trim().split(' ');
  const usedHashtags = {};
  for (let i = 0; i < hashtagStringArray.length; i++) {
    const hashtag = hashtagStringArray[i];
    if (usedHashtags[hashtag.toLowerCase()]) {
      return false;
    } else {
      usedHashtags[hashtag.toLowerCase()] = true;
    }
  }
  return true;
}

function validateComment(commentString) {
  return commentString.length <= maxCommentCharacters;
}

pristine.addValidator(
  hashtagInput,
  validateHashtag,
  'Хэштег должен содержать только буквы и цифры. Хэштег должен начинаться с #. Хештег должен составлять не более 19 символов'
);
pristine.addValidator(
  hashtagInput,
  validateHashtagCount,
  'Может использоваться не более пяти хэштегов'
);
pristine.addValidator(
  hashtagInput,
  validateUniqueHashtag,
  'Один хэштег должен использоваться только один раз'
);
pristine.addValidator(
  commentInput,
  validateComment,
  'Комментарий должен содержать не более 140 символов'
);

const blockSubmitButton = () => {
  uploadSubmitButton.disabled = true;
  uploadSubmitButton.textContent = submitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  uploadSubmitButton.disabled = false;
  uploadSubmitButton.textContent = submitButtonText.IDLE;
};

const setUserFormSubmit = () => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then((response) => {
          if (!response.ok) {
            throw new Error();
          }
          renderSuccessMessage();
        })
        .catch(() => {
          renderErrorMessage();
        })
        .finally(unblockSubmitButton);
    }
  });
};


export { setUserFormSubmit, pristine };
