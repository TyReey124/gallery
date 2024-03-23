import {generatePictures} from './data.js';
import {renderPictureList} from './picture-list.js';
import {EFFECTS, MODAL_TRANSITION} from './const.js';
import {renderEffectList} from './effect-list.js';
import './upload-modal.js';
import './login-modal.js';
import './signup-modal.js';

document.documentElement.style.setProperty('--modal-transition', `${MODAL_TRANSITION}ms`);
const pictures = generatePictures(10);
renderPictureList(pictures);
renderEffectList(EFFECTS);
