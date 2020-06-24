import noUiSlider from 'nouislider';

const slider = document.querySelector('.slider');
let sliderValueMin = document.querySelector('.range-slider__values-min');
let sliderValueMax = document.querySelector('.range-slider__values-max');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 1,
    range: {
        'min': 1,
        'max': 15000
    }
});

slider.noUiSlider.on('update', function(values,handle){
    sliderValueMin.innerHTML = parseInt(values[0]) + "&#8381;" + " - ";
    sliderValueMax.innerHTML = parseInt(values[1]) + "&#8381;";
});