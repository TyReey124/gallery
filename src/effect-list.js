const effectListElement = document.querySelector('.effects__list');
const effectTemplateElement = document.querySelector('#effect-item')
    .content
    .querySelector('.effects__item');

const renderEffectList = (effects) => {
    effects.forEach(({id, name}) => {
        const effectElement = effectTemplateElement.cloneNode(true);
        const inputElement = effectElement.querySelector('.effects__radio');
        inputElement.id = `effect-${name}`;
        inputElement.value = id;
        effectElement.querySelector('.effects__label').setAttribute('for', `effect-${name}`);
        effectElement.querySelector('.effects__preview').className = `effects__preview effects__preview--${name}`;

        effectListElement.append(effectElement);
    });
}

export {renderEffectList};
