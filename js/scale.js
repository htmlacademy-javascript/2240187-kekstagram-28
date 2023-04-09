const scaleValueControl = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const scaleImageReset = () => {
  imagePreview.removeAttribute('style');
};

function scaleImage(scaleValue) {
  scaleValueControl.value = `${scaleValue}%`;
  imagePreview.style.transform = `scale(${scaleValue / 100})`;
}

function decreaseSize() {
  const scaleCurrentValue = parseInt(scaleValueControl.value, 10);
  let scaleNewValue = scaleCurrentValue - SCALE_STEP;
  if (scaleNewValue < SCALE_MIN) {
    scaleNewValue = SCALE_MIN;
    scaleImage(scaleNewValue);
  }
  scaleImage(scaleNewValue);
}

function increaseSize() {
  const scaleCurrentValue = parseInt(scaleValueControl.value, 10);
  let scaleNewValue = scaleCurrentValue + SCALE_STEP;
  if (scaleNewValue > SCALE_MAX) {
    scaleNewValue = SCALE_MAX;
    scaleImage(scaleNewValue);
  }
  scaleImage(scaleNewValue);
}

export { scaleImageReset, decreaseSize, increaseSize };
