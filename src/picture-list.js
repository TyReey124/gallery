import {openPreviewModal, updatePreviewModal} from './preview-modal.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplateElement = document.getElementById('picture')
    .content
    .querySelector('.picture');

// Деструктуризация
const renderPictureList = (pictures) => {
    pictures.forEach((picture) => {
        const {id, url, comments, likes} = picture;
        const pictureElement = pictureTemplateElement.cloneNode(true);
        pictureElement.dataset.id = id;
        pictureElement.querySelector('.picture__img').src = url;
        pictureElement.querySelector('.picture__comments').textContent = comments.length;
        pictureElement.querySelector('.picture__likes').textContent = likes;

        pictureListElement.insertAdjacentElement('beforeend', pictureElement);
    });

    pictureListElement.addEventListener('click', (evt) => {
        const pictureElement = evt.target.closest('.picture');

        if (pictureElement) {
            const pictureId = pictureElement.dataset.id;
            const picture = pictures.find((picture) => picture.id == pictureId);
            updatePreviewModal(picture);
            openPreviewModal();
        }
    });
};

export {renderPictureList};
