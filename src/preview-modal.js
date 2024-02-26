const previewModalElement = document.querySelector('.big-picture');
console.log(previewModalElement);

const openPreviewModal = (evt) => {
    evt.preventDefault();
    previewModalElement.classList.remove('hidden');
};

const closePreviewModal = (evt) => {
    evt.preventDefault();
    if (evt.type == 'click' || evt.key == 'Escape') {
    previewModalElement.classList.add('hidden');
    console.log(evt);
}};

export {
    openPreviewModal,
    closePreviewModal
};
