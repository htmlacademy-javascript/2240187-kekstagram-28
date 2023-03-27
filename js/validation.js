export const imageUploadForm = document.querySelector('.img-upload__form');
export const hashtagInput = imageUploadForm.querySelector('.text__hashtags');
export const commentInput = imageUploadForm.querySelector('.text__description');
const maxHashtagCount = 5;
const maxCommentCharacters = 140;

export const pristine = new Pristine(imageUploadForm, {
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

imageUploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
