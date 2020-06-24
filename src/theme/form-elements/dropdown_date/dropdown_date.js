const dateInput = $('.dropdown_date__input');
$(dateInput).datepicker({
    minDate: new Date(),
    clearButton: true,
    submitButton: true
});

$(dateInput).keydown((e) => e.preventDefault());