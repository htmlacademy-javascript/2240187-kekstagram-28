export const scaleSmaller = document.querySelector('.scale__control--smaller');
export const scaleBigger = document.querySelector('.scale__control--bigger');
export const scaleValueControl = document.querySelector('.scale__control--value');
export const imagePreview = document.querySelector('.img-upload__preview img');
const scaleStep = 25;
const scaleMin = 25;
const scaleMax = 100;
export const scaleDefault = 100;

export const scaleImageReset = () => {
  imagePreview.removeAttribute('style');
};

function scaleImage(scaleValue) {
  scaleValueControl.value = `${scaleValue}%`;
  imagePreview.style.transform = `scale(${scaleValue / 100})`;
}

export function buttonSmaller () {
  const scaleCurrentValue = parseInt(scaleValueControl.value, 10);
  let scaleNewValue = scaleCurrentValue - scaleStep;
  if (scaleNewValue < scaleMin) {
    scaleNewValue = scaleMin;
    scaleImage(scaleNewValue);
  }
  scaleImage(scaleNewValue);
}

export function buttonBigger() {
  const scaleCurrentValue = parseInt(scaleValueControl.value, 10);
  let scaleNewValue = scaleCurrentValue + scaleStep;
  if (scaleNewValue > scaleMax) {
    scaleNewValue = scaleMax;
    scaleImage(scaleNewValue);
  }
  scaleImage(scaleNewValue);
}
