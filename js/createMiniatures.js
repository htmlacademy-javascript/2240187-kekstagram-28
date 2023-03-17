const pictureContainer = document.querySelector('.pictures');
const pictureElement = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotoPosts = document.createDocumentFragment();

export function createElement(randomPostData) {
  if (Array.isArray(randomPostData)) {
    randomPostData.forEach((item) => {
      const postElement = pictureElement.cloneNode(true);
      postElement.setAttribute('data-picture-id', item.id);
      postElement.querySelector('.picture__img').src = item.urlAdress;
      postElement.querySelector('.picture__comments').textContent = item.comment.length;
      postElement.querySelector('.picture__likes').textContent = item.likes;
      similarPhotoPosts.appendChild(postElement);
    });
    pictureContainer.append(similarPhotoPosts);
    return createElement();
  }
}
