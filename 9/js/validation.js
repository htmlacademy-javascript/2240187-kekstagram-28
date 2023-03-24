
const imageUploadForm = document.querySelector('.img-upload__form');
const submitButton = imageUploadForm.querySelector('.img-upload__submit');
const hashtagInput = imageUploadForm.querySelector('.text__hashtags');
const inputComment = imageUploadForm.querySelector('.text__description');
const maxHashtagCount = 5;


const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

function validateHashtag (item) {
  if (item === '') {
    return true;
  }
  const inputString = item.split(' ');
  const hashtagRegexp = /^#[a-zа-яё0-9]{1,19}$/i;
  for (let i = 0; i < inputString.length; i++) {
    const hashtag = inputString[i];
    if (!hashtagRegexp.test(hashtag)) {
      return false;
    }
  }
  return true;
}

function validateHashtagLength (item) {
  const inputString = item.split(' ');
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.length > maxHashtagCount) {
      return false;
    }
  }
  return true;
}


function validateUniqueHashtag (item) {
  const inputString = item.split(' ');
  const usedHashtags = [];
  for (let i = 0; i < inputString.length; i++) {
    const hashtag = inputString[i];

    if (usedHashtags[hashtag.toLowerCase()]) {
      return false;
    } else {
      usedHashtags[hashtag.toLowerCase()] = true;
    }
  }
  return true;
}

pristine.addValidator(hashtagInput, validateHashtag, 'Хэштег должен содержать только буквы и цифры. Хештег должен составлять не более пяти символов');
pristine.addValidator(hashtagInput, validateHashtagLength, 'Один хэштег должен использоваться только один раз');
pristine.addValidator(hashtagInput, validateUniqueHashtag, 'Может использоваться не более пяти хэштегов');

hashtagInput.addEventListener('keyup', () => {
  pristine.validate();
  submitButton.disabled = (!pristine.validate());
});

function validateComment(item) {

  return item.length <= 140;
}

pristine.addValidator(inputComment, validateComment, 'Комментарий должен содержать не более 140 символов');

inputComment.addEventListener('keyup', () => {
  pristine.validate();
  submitButton.disabled = (!pristine.validate());
});


hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

inputComment.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
