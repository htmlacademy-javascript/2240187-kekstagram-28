import { renderThumbnail } from './renderThumbnail.js';
import { renderBigPicture } from './renderBigPicture.js';
import {renderUploadImage} from './renderUploadImage.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { setUserFormSubmit } from './validation.js';

setUserFormSubmit();
getData()
  .then((response) => response.json())
  .then((data) => {
    renderThumbnail(data);
    renderBigPicture(data);
    renderUploadImage(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

