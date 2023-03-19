const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const comment = document.createDocumentFragment();

const renderComment = (randomCommentData) => {
  if (Array.isArray(randomCommentData)) {
    randomCommentData.forEach((item) => {
      const commentElement = commentTemplate.cloneNode(true);
      commentTemplate.dataset.id = item.id;
      commentTemplate.querySelector('.social__picture').src = item.avatar;
      commentTemplate.querySelector('.social__picture').alt = item.name;
      commentTemplate.querySelector('.social__text').innerHTML = item.message;
      comment.appendChild(commentElement);
    });
    commentsContainer.append(comment);
  }
};

export { renderComment };
