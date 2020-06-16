import noUiSlider from 'nouislider';

const slider = document.querySelector('.slider');

noUiSlider.create(slider, {
    start: [6000, 8000],
    connect: true,
    range: {
        'min': 5000,
        'max': 10000
    },
    tooltips: true
});