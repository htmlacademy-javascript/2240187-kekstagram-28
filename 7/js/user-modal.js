import {isEscapeKey, isEnterKey} from './util.js';
import {renderSimilarList, clearSimilarList} from './createMiniatures';
import './user-form.js';

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.big-picture__open');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

export function openUserModal() {
  userModalElement.classList.remove('hidden');
  renderSimilarList();

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal() {
  userModalElement.classList.add('hidden');
  clearSimilarList();

  document.removeEventListener('keydown', onDocumentKeydown);
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
