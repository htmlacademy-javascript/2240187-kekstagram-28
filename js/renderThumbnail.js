export const thumbnailContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnail = document.createDocumentFragment();

const renderThumbnail = (thumbnailData) => {
  if (Array.isArray(thumbnailData)) {
    thumbnailData.forEach((item) => {
      const thumbnailElement = thumbnailTemplate.cloneNode(true);
      thumbnailElement.dataset.id = item.id;
      thumbnailElement.querySelector('.picture__img').src = item.url;
      thumbnailElement.querySelector('.picture__img').alt = item.description;
      thumbnailElement.querySelector('.picture__comments').textContent = item.comments.length;
      thumbnailElement.querySelector('.picture__likes').textContent = item.likes;
      thumbnail.appendChild(thumbnailElement);
    });
    thumbnailContainer.append(thumbnail);
  }
};

export { renderThumbnail };
