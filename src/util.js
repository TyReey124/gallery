const ESCAPE_CODE = 'Escape';

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

const mixArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        let firstIndex = getRandomInt(0, array.length - 1);
        let secondIndex = getRandomInt(0, array.length - 1);
        let intermediateElement = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = intermediateElement;
    }

    return array;
};

const isEscKeydown = (evt) => evt.key === ESCAPE_CODE;

const getPopupEscKeydownHandler = (cb) => {
    return (evt) => {
        if (isEscKeydown(evt)) {
            cb();
        }
    };
};

const getOverlayClickHandler = (cb, options) => {
    return (evt) => {
        if (!options.isChildrenNodes && !evt.target.closest(options.selector)) {
            cb();
            return;
        }

        Array.from(evt.target.children).forEach((elem) => {
            if (elem.closest(options.selector)) {
                cb()
            }
        });
    };
};

export {
    getRandomInt,
    getRandomArrayElement,
    getOverlayClickHandler,
    getPopupEscKeydownHandler
};
