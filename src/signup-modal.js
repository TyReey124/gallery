import {getPopupEscKeydownHandler, getOverlayClickHandler} from "./util.js";

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
        callback: getPopupEscKeydownHandler(closeSignupModal)
    },
];

const openSignupModal = () => {
    signupModalElement.style.display = 'block';
    signupModalElement.classList.add('show');
    document.body.classList.add('modal-open');
    const modalBackdropElement = modalBackdropTemplate.cloneNode(true);
    signupModalElement.insertAdjacentElement('afterend', modalBackdropElement);

    events.forEach(({element, type, callback}) => {
        element.addEventListener(type, callback);
    });
};

signupModalBtn.addEventListener('click', openSignupModal);

function closeSignupModal() {
    signupModalElement.style.display = 'none';
    signupModalElement.classList.remove('show');
    document.body.classList.remove('modal-open');
    Array.from(modalBackdropElements).forEach((bd) => bd.remove());

    events.forEach(({element, type, callback}) => {
        element.removeEventListener(type, callback);
    });
};