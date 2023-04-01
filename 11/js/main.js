import { renderThumbnail } from './renderThumbnail.js';
//import { setUserFormSubmit } from './validation.js';
import { renderBigPicture } from './renderBigPicture.js';
import './uploadImage.js';
import { getData } from './api.js';
import { showAlert } from './util.js';


getData()
  .then((postData) => {
    renderThumbnail(postData);
    renderBigPicture(postData);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

//setUserFormSubmit();

