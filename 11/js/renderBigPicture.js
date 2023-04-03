import { isEscapeKey, isEnterKey } from './util.js';
import { thumbnailContainer } from './renderThumbnail.js';
import { renderComments, clearComment } from './renderComment.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture
  .querySelector('.big-picture__img')
  .querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsAll = bigPicture.querySelector('.comments-count');
const bigPictureComments = bigPicture.querySelector('.social__comment-count');
const cancelBigPicture = bigPicture.querySelector('.big-picture__cancel');
const photoDescription = bigPicture.querySelector('.social__caption');
const loadCommentsButton = bigPicture.querySelector('.comments-loader');
let commentShowCounter = 0;
const commentShowStep = 5;

const getBigPictureComments = () =>
  Array.from(bigPicture.querySelectorAll('.social__comment'));

const loadCommentsCounter = (allComments) => {
  if (allComments - commentShowCounter < commentShowStep) {
    commentShowCounter =
      commentShowCounter + (allComments - commentShowCounter);
  } else {
    commentShowCounter = commentShowCounter + commentShowStep;
  }
};

const updateCommentCounter = () => {
  bigPictureComments.firstChild.data = `${commentShowCounter} из `;
};

const commentsShow = (allComments) => {
  const commentsToShow = allComments.slice(0, commentShowCounter);
  for (const comment of allComments) {
    comment.classList.add('hidden');
  }
  for (const commentToShow of commentsToShow) {
    commentToShow.classList.remove('hidden');
  }
};

const loadComments = (commentsArray) => {
  loadCommentsCounter(commentsArray.length);
  if (commentShowCounter < commentsArray.length) {
    commentsShow(commentsArray);
  } else {
    commentsShow(commentsArray);
    loadCommentsButton.classList.add('hidden');
  }
};

const loadMoreComments = () => {
  loadComments(getBigPictureComments());
  updateCommentCounter();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    commentShowCounter = 0;
    clearComment();

    document.removeEventListener('keydown', onDocumentKeydown);
    loadCommentsButton.removeEventListener('click', loadMoreComments);
    cancelBigPicture.removeEventListener('keydown', onDocumentKeydown);
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentShowCounter = 0;
  clearComment();

  document.removeEventListener('keydown', onDocumentKeydown);
  loadCommentsButton.removeEventListener('click', loadMoreComments);
  cancelBigPicture.removeEventListener('click', closeBigPicture);
  cancelBigPicture.removeEventListener('keydown', onDocumentKeydown);
};

const openBigPicture = (evt, thumbnailsData) => {
  if (evt.target.closest('.picture')) {
    const target = evt.target.closest('.picture');
    const currentThumbnailData = thumbnailsData.find(
      (item) => item.id === Number(target.dataset.id)
    );
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigPictureComments.classList.remove('hidden');
    loadCommentsButton.classList.remove('hidden');
    bigPictureImg.src = currentThumbnailData.url;
    photoDescription.innerHTML = currentThumbnailData.description;
    bigPictureLikes.innerHTML = currentThumbnailData.likes;
    bigPictureCommentsAll.innerHTML = currentThumbnailData.comments.length;

    renderComments(currentThumbnailData.comments);

    loadComments(getBigPictureComments());
    updateCommentCounter();

    loadCommentsButton.addEventListener('click', loadMoreComments);
    cancelBigPicture.addEventListener('click', closeBigPicture);
    cancelBigPicture.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

const renderBigPicture = (thumbnailsData) => {
  thumbnailContainer.addEventListener('click', (evt) => {
    openBigPicture(evt, thumbnailsData);
  });
  thumbnailContainer.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openBigPicture(evt, thumbnailsData);
    }
  });
};

export { renderBigPicture, closeBigPicture };

