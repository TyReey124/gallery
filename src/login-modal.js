import {getPopupKeydownHandler, getOverlayClickHandler} from "./util.js";
import {MODAL_TRANSITION} from "./const.js";

const loginModalBtn = document.querySelector('#signin-btn');
const loginModalElement = document.querySelector('#login-modal');
const loginModalCloseBtn = loginModalElement.querySelector('.btn-close');
const modalBackdropTemplate = document.querySelector('#modal-backdrop')
    .content
    .querySelector('.modal-backdrop');
const modalBackdropElements = document.getElementsByClassName('modal-backdrop');

const options = {
    selector: '.modal-content',
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
        callback: getPopupKeydownHandler(closeLoginModal, 'Escape')
    },
];

const openLoginModal = () => {
    const modalBackdropElement = modalBackdropTemplate.cloneNode(true);
    loginModalElement.insertAdjacentElement('afterend', modalBackdropElement);
    loginModalElement.style.display = 'block';

    setTimeout(() => {
        loginModalElement.classList.add('show');
        document.body.classList.add('modal-open');

        events.forEach(({element, type, callback}) => {
            element.addEventListener(type, callback);
        });
    }, 0);
};

loginModalBtn.addEventListener('click', openLoginModal);

function closeLoginModal() {
    Array.from(modalBackdropElements).forEach((bd) => bd.remove());
    loginModalElement.classList.remove('show');

    setTimeout(() => {
        document.body.classList.remove('modal-open');
        loginModalElement.style.display = 'none';

        events.forEach(({element, type, callback}) => {
            element.removeEventListener(type, callback);
        });
    }, MODAL_TRANSITION);
};
