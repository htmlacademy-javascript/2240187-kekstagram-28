import { isEscapeKey, isEnterKey } from './util.js';
import { thumbnailContainer } from './renderThumbnail.js';
import { renderComment, clearComment } from './renderComment.js';
import { thumbnailsData } from './main.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const cancelBigPicture = bigPicture.querySelector('.big-picture__cancel');
const photoDescription = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const loadCommentsButton = bigPicture.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const openBigPicture = (evt) => {
  if (evt.target.closest('.picture')) {
    const target = evt.target.closest('.picture'); //выбираем из pictures - picture
    const currentThumbnailData = thumbnailsData.find((item) => item.id === Number(target.dataset.id)); //ищем в нашем массиве с картинками тот элемент который равен по ID картинке по которой мы клинкули. ID картинки мы присваивали в createMiniatures.js строка 10
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    commentsCount.classList.add('hidden');
    loadCommentsButton.classList.add('hidden');

    bigPictureImg.src = currentThumbnailData.url; //выбираем в big-picture - big-picture__img а в нем тэг img и меняяем ему значение src на адрес кортинки из нашего массива который получили ранее.
    photoDescription.innerHTML = currentThumbnailData.description;
    bigPictureLikes.innerHTML = currentThumbnailData.likes;
    bigPictureComments.innerHTML = currentThumbnailData.comments.length;

    renderComment(currentThumbnailData.comments);

    document.addEventListener('keydown', onDocumentKeydown);
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  clearComment();
};

thumbnailContainer.addEventListener('click', openBigPicture);

thumbnailContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openBigPicture();
  }
});

cancelBigPicture.addEventListener('click', () => {
  closeBigPicture();
});

cancelBigPicture.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeBigPicture();
  }
});
