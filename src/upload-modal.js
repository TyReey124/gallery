import {getPopupEscKeydownHandler, getOverlayClickHandler} from "./util.js";

const fileInputElement = document.querySelector('#upload-file');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const closeButtonElement = document.querySelector('#upload-cancel');
const uploadWindowImgElement = document.querySelector('.img-upload__preview img');

const options = {
    selector: '.img-upload__wrapper',
    isChildrenNodes: true,
    isBootstrapModal: false
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

const updateUploadWindow = (file) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        uploadWindowImgElement.src = reader.result;
    });

    reader.readAsDataURL(file);
};

function closeUploadWindow() {
    uploadModalElement.classList.add('hidden');
    fileInputElement.value = '';

    events.forEach(({element, type, callback}) => {
        element.removeEventListener(type, callback);
    });
};

fileInputElement.addEventListener('change', (evt) => {
    uploadModalElement.classList.remove('hidden');
    updateUploadWindow(evt.target.files[0]);

    events.forEach(({element, type, callback}) => {
        element.addEventListener(type, callback);
    });
});
