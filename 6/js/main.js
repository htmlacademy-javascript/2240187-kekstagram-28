import './util.js';
//import './data.js';
//import './createMiniatures.js';
import { photoDescriptionArray } from './data.js';
import { createElement } from './createMiniatures.js';

const FinalPost = photoDescriptionArray();
//console.log(FinalPost);
createElement(FinalPost);

