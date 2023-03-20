import './renderBigPicture.js';
import { photoDescriptionArray } from './data.js';
import { renderThumbnail } from './renderThumbnail.js';

const thumbnailsData = photoDescriptionArray();
renderThumbnail(thumbnailsData);

export { thumbnailsData };
