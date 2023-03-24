/*
const imageUploadForm = document.querySelector('.img-upload__form');
const submitButton = imageUploadForm.querySelector('.img-upload__submit');

const hashtagRegexp = /^#[a-zа-яё0-9]{1,19}$/i;
const maxHashtagCount = 5;

// Разобраться что и почему тут введено
const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

// Разбить это на 2 функции validateHashtagCount - проверяе количество hashtag и validateHashtag - которая рпроверяет regexp ом что это хэштэг
const hashtagValidation = function (validateString) {
  const hashtagByWord = validateString.split(' ');
  if (hashtagByWord.length <= maxHashtagCount) {
    for (const hashtagWord of hashtagByWord) {
      if (hashtagRegexp.test(hashtagWord) === true) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// Добавить функции по одной в pristine с сообщением что не так
// Дописать функции валидации текстового поля

pristine.addValidator( // пример добавления валидатора!!!
  imageUploadForm.querySelector('.text__hashtags'),
  validateHashtagCount,
  'Неверный хештег. хештеги должны разделяться пробелом'
);

//const validateAll = () => {
//  if (!pristine.validate()) {
//    submitButton.disabled = (true);
//    //event.preventDefault();
//  }
//};

const validateAll = (evt) => {
  const val = true;
  evt.preventDefault();
  if (val === false) {
    imageUploadForm.submit();
  } else {
    evt.preventDefault();
  }
};

submitButton.addEventListener('click', validateAll);

//imageUploadForm.addEventListener('submit', (event) => {
//  event.preventDefault();
//  alert('cancel submitting');
//});
/*
console.log(hashtagValidation("#1234 #qwerty #asdfg #zxcvb")); // менше 5 и все хэштэги - будет true
console.log(hashtagValidation("#1234 #qwerty #asdfg #zxcvb #bnmn")); // ровно 5 и все хэштэги - будет true
console.log(hashtagValidation("#1234 #qwerty #asdfg #zxcvb bnmn")); // ровно 5 и есть не хэштэг - будет false
console.log(hashtagValidation("#1234 #qwerty #asdfg #zxcvb #bnmn #bnmn2")); //болььше 5 и все - будет false

*/
