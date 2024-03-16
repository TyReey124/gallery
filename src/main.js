import {generatePictures} from './data.js';
import {renderPictureList} from './picture-list.js';
import './upload-modal.js';
import './login-modal.js';
import './signup-modal.js';

const pictures = generatePictures(10);
renderPictureList(pictures);
