import '../../vendor.js';

const dateInput = $('.dropdown_date__input');
$(dateInput).datepicker({
    minDate: new Date()
});

$(dateInput).keydown((e) => e.preventDefault());