import noUiSlider from 'nouislider';

const slider = document.querySelector('.slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 5000,
        'max': 10000
    },
    tooltips: true
});