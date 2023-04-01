import { imagePreview } from './scale.js';

const imgPreviewContainer = document.querySelector('.img-upload__preview-container');
const sliderElement = imgPreviewContainer.querySelector('.effect-level__slider');
const valueElement = imgPreviewContainer.querySelector('.effect-level__value');
const sliderContainer = imgPreviewContainer.querySelector('.img-upload__effect-level');

const imageEffect = [
  { name: 'none', filter: 'none', min: 0, max: 100, step: 1, unit: '' },
  { name: 'chrome', filter: 'grayscale', min: 0, max: 1, step: 0.1, unit: '' },
  { name: 'sepia', filter: 'sepia', min: 0, max: 1, step: 0.1, unit: '' },
  { name: 'marvin', filter: 'invert', min: 0, max: 100, step: 1, unit: '%' },
  { name: 'phobos', filter: 'blur', min: 0, max: 3, step: 0.1, unit: 'px' },
  { name: 'heat', filter: 'brightness', min: 1, max: 3, step: 0.1, unit: '' },
];


const imageEffectNone = imageEffect[0];
let imageEffectCurrent = imageEffectNone;

noUiSlider.create(sliderElement, {
  range: {
    min: imageEffectNone.min,
    max: imageEffectNone.max,
  },
  start: imageEffectNone.max,
  step: imageEffectNone.step,
  connect: 'lower',
});

const imageEffectOriginalCheck = () => {
  if (imageEffectCurrent === imageEffectNone) {
    sliderContainer.classList.add('hidden');
    imagePreview.removeAttribute('class');
    imagePreview.style.removeProperty('filter');
  } else {
    sliderContainer.classList.remove('hidden');
  }
};

const effectSliderUpdate = () => {
  imageEffectOriginalCheck();
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: imageEffectCurrent.min,
      max: imageEffectCurrent.max,
    },
    start: imageEffectCurrent.max,
    step: imageEffectCurrent.step,
  });
};

export const effectReset = () => {
  imageEffectCurrent = imageEffectNone;
  effectSliderUpdate();
};

export function effectChange(evt) {
  if (evt.target.classList.contains('effects__radio')) {
    const effectName = evt.target.value;
    imagePreview.className = `effects__preview--${effectName}`;
    imageEffectCurrent = imageEffect.find((effect) => effect.name === effectName);
    effectSliderUpdate();
  }
  effectSliderUpdate();
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    imagePreview.style.filter = `${imageEffectCurrent.filter}(${valueElement.value}${imageEffectCurrent.unit})`;
  });
}

