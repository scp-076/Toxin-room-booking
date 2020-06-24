import '../dropdown_date/dropdown_date.js';

const input = document.querySelector('.dropdown_date_filtered__input');


$(input).datepicker({
    minDate: new Date(),
    range: true,
    dateFormat: "d M",
    clearButton: true,
    submitButton: true
});

