import { renderThumbnail } from './renderThumbnail.js';
import { renderBigPicture } from './renderBigPicture.js';
import { renderUploadImage } from './renderUploadImage.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { setUserFormSubmit } from './validation.js';
import { renderFilters } from './sortPhotos.js';

export function reRenderAll(data) {
  renderThumbnail(data);
  renderBigPicture(data);
  renderUploadImage(data);
}

setUserFormSubmit();
getData()
  .then((response) => response.json())
  .then((data) => {
    reRenderAll(data);
    renderFilters(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

