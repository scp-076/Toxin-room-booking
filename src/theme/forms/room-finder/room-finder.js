import {dropDownSet} from "../../vendor.js";
import "../../vendor.js";

const clsGuests = ['.room-finder-form__guests',
    '.dropdown_guests__input-total',
    '.dropdown_guests__options',
    '.btn-minus-adults',
    '.btn-plus-adults',
    '.btn-minus-kids',
    '.btn-plus-kids',
    '.btn-minus-infants',
    '.btn-plus-infants',
    '.dropdown_guests__options__count-adults',
    '.dropdown_guests__options__count-kids',
    '.dropdown_guests__options__count-infants',
    '.dropdown_guests_clear-submit-btns__clear',
    '.dropdown_guests_clear-submit-btns__submit'
];

dropDownSet('dropdown_guests', clsGuests);

let form = document.querySelector('.room-finder-form__form');
let inputArrive = form.querySelectorAll('.room-finder-form__dropdown_date__input')[0];
let inputDeparture = form.querySelectorAll('.room-finder-form__dropdown_date__input')[1];
let datesError = form.querySelector('.room-finder-form__input-datesError');
let guestsError = form.querySelector('.room-finder-form__input-guestsError');
let guestsInput = form.querySelector('.dropdown_guests__input-total');
let arriveDate, departureDate;

$(inputArrive).datepicker({
    minDate: new Date(),
    clearButton: true,
    submitButton: true,
    autoClose: true,
    onSelect: function(fd){
        arriveDate = fd;
    }
});

$(inputDeparture).datepicker({
    minDate: new Date(),
    clearButton: true,
    submitButton: true,
    autoClose: true,
    onSelect: function(fd){
        departureDate = fd;
    }
});

function datesValidate(e, arriveDate, departureDate, guestsInput) {
    if(arriveDate > departureDate){
        e.preventDefault();
        datesError.style = "visibility: visible;";
    }
    if(arriveDate <= departureDate){
        datesError.style = "visibility: hidden;";
    }
    if(guestsInput.value === ""){
        e.preventDefault();
        guestsError.style = "visibility: visible;";
    }
}

form.onsubmit = (e) => datesValidate(e, arriveDate, departureDate, guestsInput);