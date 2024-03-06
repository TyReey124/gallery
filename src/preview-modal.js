import {renderCommentList} from "./comment-list.js";

const previewModalElement = document.querySelector('.big-picture');
const previewModalCloseElement = previewModalElement.querySelector('#picture-cancel');
const modalPictureImg = previewModalElement.querySelector('.big-picture__img img');
const modalCommentsCount = previewModalElement.querySelector('.comments-count');
const modalLikesCount = previewModalElement.querySelector('.likes-count');
const modalSocialCaption = previewModalElement.querySelector('.social__caption');

const onPopupEscKeydown = (evt) => {
    if (evt.key == 'Escape') {
        closePreviewModal();
    }
}

const onOverlayClick = (evt) => {
    if (!evt.target.closest('.big-picture__preview')) {
        closePreviewModal();
    }
}

const events = [
    {
        element: previewModalCloseElement,
        type: 'click',
        callback: closePreviewModal
    },
    {
        element: previewModalElement,
        type: 'click',
        callback: onOverlayClick
    },
    {
        element: document,
        type: 'keydown',
        callback: onPopupEscKeydown
    },
];

const updatePreviewModal = (picture) => {
    modalPictureImg.src = picture.url;
    modalCommentsCount.textContent = picture.comments.length;
    modalLikesCount.textContent = picture.likes;
    modalSocialCaption.textContent = picture.description;
    renderCommentList(picture.comments);
};

const openPreviewModal = () => {
    previewModalElement.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    events.forEach(({element, type, callback}) => {
        element.addEventListener(type, callback);
    });
};

function closePreviewModal() {
    previewModalElement.classList.add('hidden');
    document.body.style.overflow = 'initial';

    events.forEach(({element, type, callback}) => {
        element.removeEventListener(type, callback);
    });
};

export {
    openPreviewModal,
    updatePreviewModal
};
