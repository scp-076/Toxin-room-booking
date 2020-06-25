import {dropDownSet} from "../../vendor.js";
import "../../vendor.js";
import {num2str} from "../../vendor";

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
let arriveDate = null, departureDate = null;

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

let formHeadingH1 = form.querySelector('.room-finder-form__heading__h1');
let formHeadingAlt = form.querySelector('.room-finder-form__headingAlt');
let headingRoomNumber = form.querySelector('.room-finder-form__headingAlt__roomNumber');
let headingRoomPrice = form.querySelector('.room-finder-form__headingAlt__price');
let priceBlock = form.querySelector('.room-finder-form__price');
let spanDays = form.querySelector('.room-finder-form__price-days__days-count');
let spanDaysPrice = form.querySelector('.room-finder-form__price-days__price');
let spanDiscount = form.querySelector('.room-finder-form__price-discount__amount');
let spanDiscountPrice = form.querySelector('.room-finder-form__price-discount__price');
let spanAdditional = form.querySelector('.room-finder-form__price-additional__text');
let spanAdditionalPrice = form.querySelector('.room-finder-form__price-additional__price');
let totalPriceText = form.querySelector('.room-finder-form__price__total-price');
let submitBtn = form.querySelector('.button-wide');

function findRoom(e, arriveDate, departureDate, guestsInput) {
    e.preventDefault();
    function checkDates(arriveDate, departureDate, guestsInput) {
        if(arriveDate > departureDate || arriveDate === null || departureDate === null){
            datesError.style = "visibility: visible;";
            return false;
        }
        if(arriveDate <= departureDate){
            datesError.style = "visibility: hidden;";
        }
        if(guestsInput.value === ""){
            guestsError.style = "visibility: visible;";
            return false;
        }
        if(guestsInput.value !== ""){
            guestsError.style = "visibility: hidden;";
            return true;
        }
        return true;
    }
    let dailyPrice = 9990;
    let discount = 2179;
    let additionalServicePrice = 300;
    let daysAmount = parseInt(departureDate) - parseInt(arriveDate);
    let daysAmountToString = num2str(daysAmount, ['сутки', 'суток', 'суток']);

    let totalPrice = daysAmount * dailyPrice - discount + additionalServicePrice;

    checkDates(arriveDate, departureDate, guestsInput);
    if(checkDates(arriveDate, departureDate, guestsInput)) {
        formHeadingH1.style = "display: none;";
        formHeadingAlt.style = "display: flex;";
        priceBlock.style = "display: block;";
        spanDays.innerHTML = `${dailyPrice}&#8381; x ${daysAmount + " " + daysAmountToString}`;
        spanDaysPrice.innerHTML = dailyPrice * daysAmount + "&#8381;";
        spanDiscount.innerHTML = `Сбор за услуги: скидка ${discount}&#8381;`;
        spanDiscountPrice.innerHTML = "0&#8381;";
        spanAdditional.innerHTML = "Сбор за дополнительные услуги";
        spanAdditionalPrice.innerHTML = `${additionalServicePrice}&#8381;`;
        totalPriceText.innerHTML =  totalPrice > 10000
            ? "Итого" + "......................................" + totalPrice + "&#8381;"
            : "Итого" + "........................................" + totalPrice + "&#8381;";
        headingRoomNumber.innerHTML = `№ 888 <i>люкс</i>`;
        headingRoomPrice.innerHTML = `${dailyPrice}&#8381; в сутки`;
        submitBtn.textContent = "забронировать";
    }


}

form.onsubmit = (e) => findRoom(e, arriveDate, departureDate, guestsInput);