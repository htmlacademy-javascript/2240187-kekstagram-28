import { reRenderAll } from './main.js';

const showFiltersBarContainer = document.querySelector('main');
const showFilterButton = showFiltersBarContainer.querySelector('.img-filters');
const sortByDefaultButton = document.querySelector('#filter-default');
const sortByRandomButton = document.querySelector('#filter-random');
const sortByCommentsNumberButton = document.querySelector('#filter-discussed');
const pictureCount = 10;

showFilterButton.classList.remove('img-filters--inactive');

const randomSort = () => Math.random() - 0.5;

const discussedSort = (a, b) => b.comments.length - a.comments.length;

const defaultSort = (a, b) => a.id - b.id;

function resetPictures () {
  const allPicture = document.querySelectorAll('.picture');
  for (let i = 0; i < allPicture.length; i++) {
    allPicture[i].remove();
  }
}

const renderFilters = (data) => {
  sortByDefaultButton.addEventListener('click', () => {
    resetPictures();
    reRenderAll(data.sort(defaultSort));
  });
  sortByRandomButton.addEventListener('click', () => {
    resetPictures();
    reRenderAll(data.sort(randomSort).slice(0, pictureCount));
  });
  sortByCommentsNumberButton.addEventListener('click', () => {
    resetPictures();
    reRenderAll(data.sort(discussedSort));
  });
};

export { renderFilters };
