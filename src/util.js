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

const getPopupKeydownHandler = (cb, key) => {
    return (evt) => {
        if (evt.key === key) {
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

        if (!options.isBootstrapModal) {
            Array.from(evt.target.children).forEach((elem) => {
                if (elem.closest(options.selector)) {
                    cb()
                }
            });
        }
    };
};

export {
    getRandomInt,
    getRandomArrayElement,
    getOverlayClickHandler,
    getPopupKeydownHandler
};
