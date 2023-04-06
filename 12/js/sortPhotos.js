const showFiltersBarContainer = document.querySelector('main');
const showFilterButton = showFiltersBarContainer.querySelector('.img-filters');
showFilterButton.classList.remove('img-filters--inactive');
const sortByDefaultButton = document.querySelector('#filter-default');
const sortByRandomButton = document.querySelector('#filter-random');
const sortByCommentsNumberButton = document.querySelector('#filter-discussed');
const photosCount = 10;
import { reRenderAll } from './main.js';

export const sortRandlomly = (data) => {
  data = data.slice(0, photosCount);
  let i = data.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [data[i], data[ri]] = [data[ri], data[i]];
  }
  return sortRandlomly;
};

export const sortByCommentsNumber = (data) => {
  data.sort((a, b) => b.comments.length - a.comments.length);
  return data;
};

const renderFilters = (data) => {
  sortByDefaultButton.addEventListener('click', () => {
    reRenderAll(data);
  });
  sortByRandomButton.addEventListener('click', () => {
    reRenderAll(sortRandlomly(data));
  });
  sortByCommentsNumberButton.addEventListener('click', () => {
    reRenderAll(sortByCommentsNumber(data));
  });
};

export { renderFilters };

/*
1. querySelector для каждой кнопки фильтра +
2. функция для рандомной сортировки, для дефолтной сортировки, для сортировки по комментам +
3. const для трех типов сортировки, каждый тип сортировки должен быть равен какой то констенте
4. импортировать в sortphotos функцию rerenderall +
5. навесить клик на каждую кнопку фильтра, вызвав функцию rerenderall c отсортированным необходимым образом массивом
*/
