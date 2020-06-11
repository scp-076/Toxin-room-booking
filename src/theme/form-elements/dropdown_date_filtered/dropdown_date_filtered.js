import '../dropdown_date/dropdown_date.js';

const input = document.querySelector('.dropdown_date_filtered__input');
const input2 = document.querySelector('.dropdown_date__input');


$(input).datepicker({
    minDate: new Date(),
    range: true,
    dateFormat: "d M",
    altField: input2,
    clearButton: true,
    submitButton: true
});

