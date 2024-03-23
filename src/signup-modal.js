import {getPopupKeydownHandler, getOverlayClickHandler} from "./util.js";
import {MODAL_TRANSITION} from "./const.js";

const signupModalBtn = document.querySelector('#signup-btn');
const signupModalElement = document.querySelector('#signup-modal');
const signupModalCloseBtn = signupModalElement.querySelector('.btn-close');
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
        element: signupModalCloseBtn,
        type: 'click',
        callback: closeSignupModal
    },
    {
        element: signupModalElement,
        type: 'click',
        callback: getOverlayClickHandler(closeSignupModal, options)
    },
    {
        element: document,
        type: 'keydown',
        callback: getPopupKeydownHandler(closeSignupModal, 'Escape')
    },
];

const openSignupModal = () => {
    const modalBackdropElement = modalBackdropTemplate.cloneNode(true);
    signupModalElement.insertAdjacentElement('afterend', modalBackdropElement);
    signupModalElement.style.display = 'block';

    setTimeout(() => {
        signupModalElement.classList.add('show');
        document.body.classList.add('modal-open');

        events.forEach(({element, type, callback}) => {
            element.addEventListener(type, callback);
        });
    }, 0);
};

signupModalBtn.addEventListener('click', openSignupModal);

function closeSignupModal() {
    Array.from(modalBackdropElements).forEach((bd) => bd.remove());
    signupModalElement.classList.remove('show');

    setTimeout(() => {
        signupModalElement.style.display = 'none';
        document.body.classList.remove('modal-open');

        events.forEach(({element, type, callback}) => {
            element.removeEventListener(type, callback);
        });
    }, MODAL_TRANSITION);
};
