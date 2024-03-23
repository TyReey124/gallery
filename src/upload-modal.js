import {getPopupKeydownHandler, getOverlayClickHandler} from "./util.js";
import {zoomImage} from "./image-zoom.js";

const fileInputElement = document.querySelector('#upload-file');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const closeButtonElement = document.querySelector('#upload-cancel');
const uploadWindowImgElement = document.querySelector('.img-upload__preview img');
const zoomPlus = document.querySelector('.scale__control--bigger');
const zoomMinus = document.querySelector('.scale__control--smaller');
const effectPreviewElements = document.getElementsByClassName('effects__preview');

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
        callback: getPopupKeydownHandler(closeUploadWindow, 'Escape')
    },
    {
        element: uploadModalElement,
        type: 'click',
        callback: getOverlayClickHandler(closeUploadWindow, options)
    },
    {
        element: zoomPlus,
        type: 'click',
        callback: zoomImage
    },
    {
        element: zoomMinus,
        type: 'click',
        callback: zoomImage,
    }
];

const updateUploadWindow = (file) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        uploadWindowImgElement.src = reader.result;
        Array.from(effectPreviewElements).forEach((previewElement) => {
            previewElement.style.backgroundImage = `url(${reader.result})`;
        });
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


const openUploadWindow = (evt) => {
    uploadModalElement.classList.remove('hidden');
    updateUploadWindow(evt.target.files[0]);

    events.forEach(({element, type, callback}) => {
        element.addEventListener(type, callback);
    });
};

document.addEventListener('keydown', (evt) => {
    if (evt.key == '+') {
        fileInputElement.click();
    }
});

fileInputElement.addEventListener('change', openUploadWindow);
