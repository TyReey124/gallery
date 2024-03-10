import {getPopupEscKeydownHandler, getOverlayClickHandler} from "./util.js";

const fileInputElement = document.querySelector('#upload-file');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const closeButtonElement = document.querySelector('#upload-cancel');

const options = {
    selector: '.img-upload__wrapper',
    isChildrenNodes: true
};

const events = [
    {
        element: closeButtonElement,
        type: 'click',
        callback: closeUploadWindow
    },
    {
        element: document,
        type: 'keydown',
        callback: getPopupEscKeydownHandler(closeUploadWindow)
    },
    {
        element: uploadModalElement,
        type: 'click',
        callback: getOverlayClickHandler(closeUploadWindow, options),
    }
];

function closeUploadWindow() {
    uploadModalElement.classList.add('hidden');

    events.forEach(({element, type, callback}) => {
        element.removeEventListener(type, callback);
    });
};

fileInputElement.addEventListener('change', () => {
    uploadModalElement.classList.remove('hidden');

    events.forEach(({element, type, callback}) => {
        element.addEventListener(type, callback);
    });
});
