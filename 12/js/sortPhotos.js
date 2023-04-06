import { reRenderAll } from './main.js';

const showFiltersBarContainer = document.querySelector('main');
const showFilterButtonContainer = showFiltersBarContainer.querySelector('.img-filters');
const showFilterAllButtons = showFiltersBarContainer.querySelectorAll('.img-filters__button');
const sortByDefaultButton = document.querySelector('#filter-default');
const sortByRandomButton = document.querySelector('#filter-random');
const sortByCommentsNumberButton = document.querySelector('#filter-discussed');
const pictureCount = 10;

showFilterButtonContainer.classList.remove('img-filters--inactive');

const randomSort = () => Math.random() - 0.5;

const discussedSort = (a, b) => b.comments.length - a.comments.length;

const defaultSort = (a, b) => a.id - b.id;

function resetPictures () {
  showFilterAllButtons.forEach((item) => item.classList.remove('img-filters__button--active'));
  const allPicture = document.querySelectorAll('.picture');
  allPicture.forEach((item) => item.remove());
}

const renderFilters = (data) => {
  sortByDefaultButton.addEventListener('click', () => {
    resetPictures();
    sortByDefaultButton.classList.add('img-filters__button--active');
    reRenderAll(data.sort(defaultSort));
  });
  sortByRandomButton.addEventListener('click', () => {
    resetPictures();
    sortByRandomButton.classList.add('img-filters__button--active');
    reRenderAll(data.sort(randomSort).slice(0, pictureCount));
  });
  sortByCommentsNumberButton.addEventListener('click', () => {
    resetPictures();
    sortByCommentsNumberButton.classList.add('img-filters__button--active');
    reRenderAll(data.sort(discussedSort));
  });
};

export { renderFilters };
