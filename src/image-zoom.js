const uploadWindowImgElement = document.querySelector('.img-upload__preview img');
const zoomCounter = document.querySelector('.scale__control--value');
const zoomPlusBtn = document.querySelector('.scale__control--bigger');
const zoomMinusBtn = document.querySelector('.scale__control--smaller');

const SCALE_CONTROL_MAX_VALUE = 100;
const SCALE_CONTROL_STEP = 25;
const TOTAL_PERCENT = 100;

const cursorChange = (counterValue) => {
    if (counterValue === SCALE_CONTROL_STEP) {
        zoomMinusBtn.style.cursor = 'not-allowed';
        zoomMinusBtn.disabled = true;
    } else if (counterValue === SCALE_CONTROL_MAX_VALUE) {
        zoomPlusBtn.style.cursor = 'not-allowed';
        zoomPlusBtn.disabled = true;
    } else {
        zoomPlusBtn.style.cursor = zoomMinusBtn.style.cursor = 'pointer';
        zoomMinusBtn.disabled = zoomPlusBtn.disabled = false;
    }
};

const zoomImage = (evt) => {
    let counterValue = +zoomCounter.value.replace('%', '');
    const isBigger = evt.target.classList[1].includes('bigger');

    if (isBigger) {
        counterValue += SCALE_CONTROL_STEP;
        zoomCounter.value = `${counterValue}%`;
        uploadWindowImgElement.style.transform = `scale(${(counterValue / TOTAL_PERCENT)})`;
        cursorChange(counterValue);
    }
    if (!isBigger) {
        counterValue -= SCALE_CONTROL_STEP;
        zoomCounter.value = `${counterValue}%`;
        uploadWindowImgElement.style.transform = `scale(${(counterValue / TOTAL_PERCENT)})`;
        cursorChange(counterValue);
    }
}

export {zoomImage};
