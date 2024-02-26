import {generatePictures} from './data.js';
import {renderPictureList} from './picture-list.js';

const pictures = generatePictures(10);
renderPictureList(pictures);
