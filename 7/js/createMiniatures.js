const pictureContainer = document.querySelector('.pictures');
const pictureElement = document.querySelector('#picture').content.querySelector('.picture');

const renderSimilarList = () => {
  const similarPhotoPosts = document.createDocumentFragment();


  similarPhotoPosts.forEach((item) => {
    const postElement = pictureElement.cloneNode(true);
    postElement.querySelector('.picture__img').src = item.urlAdress;
    postElement.querySelector('.picture__comments').textContent = item.comment.length;
    postElement.querySelector('.picture__likes').textContent = item.likes;
    similarPhotoPosts.appendChild(postElement);
  });
  pictureContainer.append(similarPhotoPosts);
};

const clearSimilarList = () => {
  renderSimilarList.innerHTML = '';
};

export {renderSimilarList, clearSimilarList};


