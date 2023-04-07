const scaleValueControl = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const scaleStep = 25;
const scaleMin = 25;
const scaleMax = 100;

const scaleImageReset = () => {
  imagePreview.removeAttribute('style');
};

function scaleImage(scaleValue) {
  scaleValueControl.value = `${scaleValue}%`;
  imagePreview.style.transform = `scale(${scaleValue / 100})`;
}

function buttonSmaller () {
  const scaleCurrentValue = parseInt(scaleValueControl.value, 10);
  let scaleNewValue = scaleCurrentValue - scaleStep;
  if (scaleNewValue < scaleMin) {
    scaleNewValue = scaleMin;
    scaleImage(scaleNewValue);
  }
  scaleImage(scaleNewValue);
}

function buttonBigger() {
  const scaleCurrentValue = parseInt(scaleValueControl.value, 10);
  let scaleNewValue = scaleCurrentValue + scaleStep;
  if (scaleNewValue > scaleMax) {
    scaleNewValue = scaleMax;
    scaleImage(scaleNewValue);
  }
  scaleImage(scaleNewValue);
}

export { scaleImageReset, buttonSmaller, buttonBigger };
