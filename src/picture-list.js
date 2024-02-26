import {openPreviewModal, closePreviewModal} from './preview-modal.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplateElement = document.getElementById('picture')
    .content
    .querySelector('.picture');

// const renderPictureList = (pictures) => {
//     pictures.forEach((picture) => {
//         const pictureElement = pictureTemplateElement.cloneNode(true);
//         pictureElement.querySelector('.picture__img').src = picture.url;
//         pictureElement.querySelector('.picture__img').setAttribute('src', picture.url);

//         pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
//         pictureElement.querySelector('.picture__likes').textContent = picture.likes;
//         pictureListElement.append(pictureElement);
//     });
// };

// Деструктуризация
const renderPictureList = (pictures) => {
    pictures.forEach(({url, comments, likes}) => {
        const pictureElement = pictureTemplateElement.cloneNode(true);
        pictureElement.querySelector('.picture__img').src = url;
        // pictureElement.querySelector('.picture__img').setAttribute('src', url);

        pictureElement.querySelector('.picture__comments').textContent = comments.length;
        pictureElement.querySelector('.picture__likes').textContent = likes;

        // pictureListElement.append(pictureElement);
        pictureListElement.insertAdjacentElement('beforeend', pictureElement);

        pictureElement.addEventListener('click', openPreviewModal);
    });
};

// FOR OF
// const renderPictureList = (pictures) => {
//     for (const {comments, url, likes} of pictures) {
//         const pictureElement = pictureTemplateElement.cloneNode(true);
//         pictureElement.querySelector('.picture__img').src = url;
//         pictureElement.querySelector('.picture__comments').textContent = comments.length;
//         pictureElement.querySelector('.picture__likes').textContent = likes;
//         pictureListElement.append(pictureElement);
//     }
// };

// Через FOR
// const renderPictureList = (pictures) => {
//     for (let i = 0; i < pictures.length; i++) {
//         const picture = pictures[i];
//         const pictureElement = pictureTemplateElement.cloneNode(true);
//         pictureElement.querySelector('.picture__img').src = picture.url;
//         pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
//         pictureElement.querySelector('.picture__likes').textContent = picture.likes;
//         pictureListElement.append(pictureElement);
//     }
// };

const pictureCancelButton = document.getElementById('picture-cancel');
const overlayElement = document.querySelector('.big-picture');
console.log(overlayElement);

pictureCancelButton.addEventListener('click', closePreviewModal);
document.addEventListener('keydown', closePreviewModal);
overlayElement.addEventListener('click', closePreviewModal);


export {renderPictureList};
