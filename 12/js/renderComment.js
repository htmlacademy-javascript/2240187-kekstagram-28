const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const comment = document.createDocumentFragment();

const clearComment = () => {
  commentsContainer.innerHTML = '';
};

const renderComments = (randomCommentData) => {
  if (Array.isArray(randomCommentData)) {
    randomCommentData.forEach((item) => {
      const commentElement = commentTemplate.cloneNode(true);
      commentElement.dataset.id = item.id;
      commentElement.querySelector('.social__picture').src = item.avatar;
      commentElement.querySelector('.social__picture').alt = item.name;
      commentElement.querySelector('.social__text').innerHTML = item.message;
      comment.appendChild(commentElement);
    });
    commentsContainer.append(comment);
  }
};

export { renderComments, clearComment };
