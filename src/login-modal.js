import {getPopupEscKeydownHandler, getOverlayClickHandler} from "./util.js";

const loginModalBtn = document.querySelector('#signin-btn');
const loginModalElement = document.querySelector('#login-modal');
const loginModalCloseBtn = loginModalElement.querySelector('.btn-close');
const modalBackdropTemplate = document.querySelector('#modal-backdrop')
    .content
    .querySelector('.modal-backdrop');
const modalBackdropElements = document.getElementsByClassName('modal-backdrop');

const options = {
    selector: '.modal-dialog',
    isChildrenNodes: false,
    isBootstrapModal: true
};

const events = [
    {
        element: loginModalCloseBtn,
        type: 'click',
        callback: closeLoginModal
    },
    {
        element: loginModalElement,
        type: 'click',
        callback: getOverlayClickHandler(closeLoginModal, options)
    },
    {
        element: document,
        type: 'keydown',
        callback: getPopupEscKeydownHandler(closeLoginModal)
    },
];

const openLoginModal = () => {
    loginModalElement.style.display = 'block';
    loginModalElement.classList.add('show');
    document.body.classList.add('modal-open');
    const modalBackdropElement = modalBackdropTemplate.cloneNode(true);
    loginModalElement.insertAdjacentElement('afterend', modalBackdropElement);


    events.forEach(({element, type, callback}) => {
        element.addEventListener(type, callback);
    });
};

loginModalBtn.addEventListener('click', openLoginModal);

function closeLoginModal() {
    loginModalElement.style.display = 'none';
    loginModalElement.classList.remove('show');
    document.body.classList.remove('modal-open');
    Array.from(modalBackdropElements).forEach((bd) => bd.remove());

    events.forEach(({element, type, callback}) => {
        element.removeEventListener(type, callback);
    });
};
